type HallPageProps = {
  params: {
    hall: string;
  };
};

export default function HallPage({ params }: HallPageProps) {
  return <div className="text-white">{params.hall}</div>;
}
