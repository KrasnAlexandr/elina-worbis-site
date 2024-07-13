import { FC } from 'react';
import Link from 'next/link';
import { Title } from '@/shared/ui/Title';
import { INSTRUCTION_URL } from '@/shared/constants';

interface ArticleItem {
  id: number;
  categoryId: string;
  title: string;
}

interface FetchAllArticleResponse {
  result: {
    articles: {
      items: Array<ArticleItem>;
    };
  };
}

export const fetchAllArticle = async (categoryId: string): Promise<FetchAllArticleResponse> => {
  const response = await fetch(INSTRUCTION_URL, {
    method: 'POST',
    next: {
      revalidate: 60, // sec => 3600 === 1 hour
    },
    body: JSON.stringify({
      method: 'article.all',
      params: {
        filter: {
          author: 0,
          status: 'published',
          categoryId,
        },
        pagination: {
          limit: 1000,
          offset: 0,
        },
      },
      jsonrpc: '2.0',
    }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
  }

  return await response.json();
};

type TProps = {
  params: {
    id: string;
    locale: string;
  };
};

export const SubcategoryPage: FC<TProps> = async ({ params: { id, locale } }) => {
  const allArticle = await fetchAllArticle(id);

  const articleForCurrentSubcategory = allArticle.result.articles.items;

  return (
    <>
      <Title dictionary="subcategory" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {articleForCurrentSubcategory.map((item) => (
          <Link href={`/${locale}/article/${item.id}`} key={item.id}>
            {item.title}
          </Link>
        ))}
      </div>
    </>
  );
};
