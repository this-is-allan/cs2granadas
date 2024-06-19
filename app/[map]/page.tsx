import Card from '../components/Card';
import Header from '../components/Header';
import Team from './components/Team';

type PageProps = {
  params: {
    map: string;
  };
};

export default function Page({ params }: PageProps) {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Header />
      <Card>
        <Team map={params.map} />
      </Card>
    </main>
  );
}
