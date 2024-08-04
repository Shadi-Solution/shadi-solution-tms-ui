import App from '@/App/App';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/tenant-management')({
  component: App,
});
