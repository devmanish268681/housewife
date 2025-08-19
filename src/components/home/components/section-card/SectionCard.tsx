//types
import { Product } from "@/lib/types/products";
import { SectionItem } from "../../types";
import { useRouter } from "next/navigation";

const SectionCard = ({ title, items }: { title: string; items: Product[] }) => {
  const router = useRouter();
  return (
    <section className="py-8 px-4">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 cursor-pointer">
        {items?.map((item) => (
          <div
            key={item.id}
            onClick={() =>
              router.push(`category/groceries?categoryId=${item.categoryId}`)
            }
            className="bg-white border rounded-xl p-3 shadow-sm text-center hover:shadow-md transition"
          >
            <img
              src={item?.images?.[0] || ""}
              alt={item.name}
              className="w-full h-24 object-cover rounded-md mb-2"
            />
            <p className="text-sm font-medium line-clamp-2">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionCard;
