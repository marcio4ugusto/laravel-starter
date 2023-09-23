import Logo from '@/components/Logo'
import { Button } from '@/components/ui/button'
import { Head, Link } from '@inertiajs/react'

export default function Welcome() {
  return (
    <>
      <Head title="Welcome" />
      <header className="w-full">
        <nav className="flex items-center justify-between w-full px-6 py-3">
          <div className="w-20 h-auto">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <ul>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/control-panel">Access Control Panel</Link>
              </Button>
            </div>
          </ul>
        </nav>
      </header>
      <main className="flex flex-col align-center justify-center h-[600px]">
        <>
          <h1 className="text-6xl text-center font-bold">Hello World!</h1>
          <p className="mt-4 text-xl text-center text-slate-600 font-medium">
            Build your apps with <Link href="https://laravel.com">Laravel</Link>
            , <Link href="https://inertiajs.com">Inertia Js</Link>,{' '}
            <Link href="https://react.dev">React</Link>,{' '}
            <Link href="https://tailwindcss.com">Tailwind Css</Link> &{' '}
            <Link href="https://ui.shadcn.com/">Shadcn UI</Link>
          </p>
        </>
      </main>
      <footer>
        <p className="absolute bottom-4 w-full text-center text-sm text-slate-500">
          2023 @MIT License
        </p>
      </footer>
    </>
  )
}
