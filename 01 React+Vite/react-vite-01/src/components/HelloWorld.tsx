interface HelloWorldProps {
    name: string;
}

export default function HelloWorld({ name }: HelloWorldProps) {
    return <div>Hello, {name}!</div>;
}