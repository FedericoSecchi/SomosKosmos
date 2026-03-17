import { Link } from "react-router-dom";
import { brandsData } from "@/data/brands";
import { useI18n } from "@/i18n/context";

const Clients = () => {
  const { t } = useI18n();

  const marqueeBrands = [...brandsData, ...brandsData];

  return (
    <div className="flex gap-16 marquee-track whitespace-nowrap">
      {marqueeBrands.map((brand, index) => (
        <div
          key={index}
          className="flex-shrink-0 flex items-center justify-center h-20 px-8 group"
        >
          <div className="text-center">
            <Link to={`/project/${brand.id}`} className="block">
              <h3 className="font-display text-lg lg:text-xl font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                {t(`brands.${brand.id}`)}
              </h3>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Clients;

