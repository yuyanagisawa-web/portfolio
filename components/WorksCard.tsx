import Image from "next/image";

type Props = {
  title: string;
  tech: string;
  image: string;
};

export default function WorksCard({ title, tech, image }: Props) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "20px",
      borderRadius: "10px",
      marginBottom: "20px"
    }}>

      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
      />

      <h3>{title}</h3>
      <p>{tech}</p>

    </div>
  );
}