import { setSelectedCategory } from "@/store/paginationSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";

interface CategoryFilterProps {
  categories: string[];
}

// This component is used to render the select tag which displays different types of categories
const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories }) => {
  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector(
    (state) => state.pagination.selectedCategory
  );
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSelectedCategory(e.target.value));
  };

  return (
    <div className="mb-7 flex justify-end">
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="px-4 py-2 border rounded-md w-full sm:w-[320px] outline-none"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
