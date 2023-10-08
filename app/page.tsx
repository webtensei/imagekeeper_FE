import {redirect} from "next/navigation";

export default function Home() {
    redirect('/dashboard')

  return (
    <main className="flex  min-h-screen flex-col justify-center items-center">
            <p>There is can be landing page</p>
    </main>
  )
}
