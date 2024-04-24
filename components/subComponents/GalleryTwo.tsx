import Image from "next/image";

const slides = [
  "https://unsplash.com/photos/ss20MbHZzck/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8aW5kaWElMjB0b3VyaXN0JTIwcGxhY2VzfGVufDB8fHx8MTcxMzM1NzU5N3ww&force=true",
  "https://unsplash.com/photos/OCvFU8K0lRI/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjJ8fGluZGlhJTIwdG91cmlzdCUyMHBsYWNlc3xlbnwwfHx8fDE3MTMzNTc2MzR8MA&force=true",
  "https://unsplash.com/photos/IPlPkWPJ2fo/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NDh8fGluZGlhJTIwdG91cmlzdCUyMHBsYWNlc3xlbnwwfHx8fDE3MTMzNTc2Njh8MA&force=true",
  "https://unsplash.com/photos/3n0FEnkoa4s/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NTB8fGluZGlhJTIwdG91cmlzdCUyMHBsYWNlc3xlbnwwfHx8fDE3MTMzNTc2Njh8MA&force=true",
];

const GalleryTwo: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {slides.map((slide, index) => (
        <div key={index} className="relative w-full h-64">
          <Image
            src={slide}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryTwo;
