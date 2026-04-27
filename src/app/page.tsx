import Image from "next/image";
import styles from "./page.module.css";
import { AgendaCard } from '@/components/organisms/AgendaCard/AgendaCard';

export default function Home() {
  return (
    <main style={{ padding: '40px', background: '#444343', minHeight: '100vh' }}>
      <AgendaCard
        badgeNumber={1}
        title="Agenda/Topic"
        tagLabel="SAAS-0000"
        description="Description of what is done here"
        lastUpdated="3/8/2020"
      />
    </main>
  );
}