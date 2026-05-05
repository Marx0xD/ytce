import { EditorialBlock } from "../components/EditorialBlock";
import { editorialBlocks } from "../components/site-data";

export default function OfferingsPage() {
  return (
    <main className="page-main" id="offerings">
      {editorialBlocks.slice(2).map((block) => (
        <EditorialBlock key={block.id} {...block} />
      ))}
    </main>
  );
}
