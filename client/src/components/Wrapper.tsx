interface WrapperInterface {
  children: React.ReactNode;
}

function Wrapper({ children }: WrapperInterface) {
  return <div className="p-3">{children}</div>;
}

export default Wrapper;
