import Counter from '../components/Counter';
import ProjectInfo from '../components/ProjectInfo';
import Store from '../components/Store';

export default function Home() {
  return (
    <main>
      <h1>NextJS Homework</h1>

      <section>
        <h2>Counters</h2>
        <div className="row">
          <Counter step={1} color="#2563eb" />
          <Counter step={2} color="#16a34a" />
        </div>
      </section>

      <section>
        <h2>My final project</h2>
        <ProjectInfo />
      </section>

      <section>
        <h2>Store</h2>
        <Store />
      </section>
    </main>
  );
}
