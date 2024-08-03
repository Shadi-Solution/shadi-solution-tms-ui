import Badge from '@/components/ui/Badge';
import './App.css';
import { Button } from '@/components/ui';

function App() {
  return (
    <div>
      <h1 className="text-2xl">Shadi solution TMS-UI</h1>
      <Wrapper />
      <Badge variant={'secondary'}>I am Badge</Badge>
      <Button variant={'outline'} size={'sm'}>
        Look at me
      </Button>
    </div>
  );
}

const Wrapper = () => <h2>wrapper component</h2>;

export default App;
