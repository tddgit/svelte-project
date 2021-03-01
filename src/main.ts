import App from './App.svelte';

interface AppProps {
    target: HTMLElement;
    props: {
        name: string;
        age: number;
    };
}

const app = new App({
    target: document.body,
    props: {
        name: 'world',
        age: 39,
    },
} as AppProps);

export default app;
