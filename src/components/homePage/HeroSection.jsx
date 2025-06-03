import { SearchForm } from '../SearchForm';

export function HeroSection({ setSearchResults, setSearchText }) {
  return (
    <div className="bg-[url('/public/bg-hero.jpg')] bg-cover bg-center font-roboto">
      <div className="bg-bg-black px-10 py-12 sm:px-24 lg:py-24 lg:px-32">
        <h1 className="font-boska text-white text-[40px] mb-1 text-center font-bold lg:text-[45px] lg:text-left">
          Find your next stay here! For what? Oga rest!!!!
        </h1>
        <SearchForm
          setSearchResults={setSearchResults}
          setSearchText={setSearchText}
        />
      </div>
    </div>
  );
}
