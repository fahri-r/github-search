import User from "./User";

interface SearchResult {
  incomplete_results: boolean;
  items: User[];
  total_count: number;
}

export default SearchResult;
