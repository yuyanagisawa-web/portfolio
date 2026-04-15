import Navbar from "../../components/Navbar";
import WorksCard from "../../components/WorksCard";

export default function Works() {
  return (
    <main>

      <Navbar />

      <h1>Works</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px"
        }}
      >

        <WorksCard
          title="Corporate Website"
          tech="HTML / CSS / JavaScript"
          image="/work1.jpg"
        />

        <WorksCard
          title="WordPress Site"
          tech="WordPress"
          image="/work2.jpg"
        />

        <WorksCard
          title="Portfolio Site"
          tech="Next.js / React"
          image="/work3.jpg"
        />

      </div>

    </main>
  );
}