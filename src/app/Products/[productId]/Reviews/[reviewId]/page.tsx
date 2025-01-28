import { notFound } from "next/navigation";

export default function Review({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h2>
      {params.reviewId} for Product{params.productId}
    </h2>
  );
}
