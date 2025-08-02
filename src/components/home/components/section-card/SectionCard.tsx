//types
import { SectionItem } from "../../types";

const SectionCard = ({
  title,
  items,
}: {
  title: string;
  items: SectionItem[];
}) => {
  return (
    <section className="py-8 px-4">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-xl p-3 shadow-sm text-center hover:shadow-md transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-24 object-cover rounded-md mb-2"
            />
            <p className="text-sm font-medium line-clamp-2">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionCard;
