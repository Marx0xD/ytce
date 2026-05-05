import { EditorialBlock } from "../components/EditorialBlock";
import { editorialBlocks } from "../components/site-data";

export default function AboutPage() {
  return (
    <main className="page-main">
      {editorialBlocks.slice(0, 2).map((block) => (
        <EditorialBlock key={block.id} {...block} />
      ))}
    </main>
  );
}
