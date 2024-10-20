import Home from '@/components/Home';
import NotesApp from '@/components/NotesForm';

export default function Landing() {
	return (
		<div className="flex flex-1 flex-col justify-center items-center">
			<Home />
			<NotesApp />
		</div>
	);
}
