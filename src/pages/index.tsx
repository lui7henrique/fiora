import { DefaultLayout } from "layouts/Default"
import { HomeTemplate } from "templates/Home"

export default function Home() {
  return (
    <>
      <DefaultLayout title="Início" description="Início">
        <HomeTemplate />
      </DefaultLayout>
    </>
  )
}
