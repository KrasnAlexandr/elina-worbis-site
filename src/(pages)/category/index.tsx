import { FC } from 'react';
import { fetchCategories } from '@/(pages)/categories';
import Link from 'next/link';
import { Title } from '@/shared/ui/Title';

type TProps = {
  params: {
    id: string;
    locale: string;
  };
};
export const CategoryPage: FC<TProps> = async ({ params: { id, locale } }) => {
  const categories = await fetchCategories();

  const currentCategory = categories.result.categories.items.filter((category) => category.parentId === id);

  return (
    <>
      <Title dictionary="category" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {currentCategory.map((item) => (
          <Link href={`/${locale}/subcategory/${item.id}`} key={item.id}>
            {item.name}
          </Link>
        ))}
      </div>
    </>
  );
};
