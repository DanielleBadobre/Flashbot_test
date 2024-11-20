function MyButton() {
  return (
    <button>
      Heloo!
    </button>
  );
}

function AboutPage() {
  return (
    <>
      <h1>
        this is a test
      </h1>
      <p>this is what <br /> it is about</p>
    </>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome</h1>
      <MyButton />
      <AboutPage />
    </div>
  );
}