type HallPage = {
  params: { hall: number };
};

export default async function HallPage({ params }: HallPage) {
  return <div className="text-white">{params.hall}</div>;
}
