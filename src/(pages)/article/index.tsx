import { Title } from '@/shared/ui/Title';
import { INSTRUCTION_URL } from '@/shared/constants';
import clsx from 'clsx';
import { FC } from 'react';
import styles from './index.module.scss';

export interface ArticleItem {
  id: string;
  categoryId: string;
  authorId: number;
  authorName: string;
  title: string;
  contentUrl: string;
  videoUrl: string;
  videoOriginalUrl: string;
  status: string;
  type: string;
  slug: string;
  icon: string;
  language: string;
  availableLanguages: Array<string>;
  version: number;
  views: number;
  keywords: unknown;
  similarArticles: Array<unknown>;
  createdAt: string;
  updatedAt: string;
  approvedAt: string;
}

interface FetchOneArticleResponse {
  result: {
    article: ArticleItem;
  };
}

export const fetchCurrentArticle = async (id: string): Promise<FetchOneArticleResponse> => {
  const response = await fetch(INSTRUCTION_URL, {
    method: 'POST',
    next: {
      revalidate: 60, // sec => 3600 === 1 hour
    },
    body: JSON.stringify({
      method: 'article.one',
      params: { id },
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
  };
};

export const ArticlePage: FC<TProps> = async ({ params: { id } }) => {
  const fetchArticle = await fetchCurrentArticle(id);

  const currentArticle = fetchArticle.result.article;

  const responseRichContentCurrentArticle = await fetch(`${currentArticle.contentUrl}`);
  const richContent: { reachEditorState: unknown } = await responseRichContentCurrentArticle.json();

  return (
    <>
      <Title dictionary="article" text={id} />
      <div className={clsx(styles.wrapper)}>
        <p className={clsx(styles.wrapper__text)}>{currentArticle.title}</p>
        <p>{currentArticle.updatedAt}</p>
        {JSON.stringify(richContent.reachEditorState)}
      </div>
    </>
  );
};
