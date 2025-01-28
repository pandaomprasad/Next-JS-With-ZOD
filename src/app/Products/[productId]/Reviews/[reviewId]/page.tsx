export default function Review({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  return (
    <h2>
      {params.reviewId} for Product{params.productId}
    </h2>
  );
}
