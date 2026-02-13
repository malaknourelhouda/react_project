function ExoProps({ module1, module2 }) {
  const moyenne = (module1 + module2) / 2;

  return (
    <>
      <h1>La moyenne est {moyenne}</h1>
    </>
  );
}

export default ExoProps;
