export default function Page(props) {
  console.log("props: ", props);
  return (
    <div className="min-w-[100vw] min-h-[100vh] flex justify-center items-center">
      {props.data.title}
    </div>
  );
}

export const getStaticProps = async (context) => {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await result.json();

  return {
    props: { data: data },
  };
};
