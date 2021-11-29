// containers
import { Card } from '../../common/containers/Products/Card';

// components
import { Spinner } from '../../common/components';

// hooks
import { useProducts } from '../../hooks/useProducts';

function Products() {
  const { data: products, isLoading, isError } = useProducts();

  // Loading
  if (isLoading)
    return (
      <div className="w-ful h-56 flex flex-wrap content-center justify-center">
        <Spinner />
      </div>
    );

  // Error
  if (isError) return <p>Error</p>;

  return (
    <>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export { Products };
