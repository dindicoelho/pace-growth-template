import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            🚀 PACE Growth Template
          </h1>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Welcome to Your Growth App</CardTitle>
              <CardDescription>
                Professional template for scaling products
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                This template includes everything you need for a production-ready application:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                <li>✅ Multi-environment setup (Dev/Staging/Prod)</li>
                <li>✅ Complete CI/CD pipeline</li>
                <li>✅ Testing framework (Unit/Integration/E2E)</li>
                <li>✅ Professional UI components</li>
                <li>✅ Security best practices</li>
                <li>✅ Performance optimizations</li>
              </ul>
              
              <div className="mt-6 flex gap-4">
                <Button>Get Started</Button>
                <Button variant="outline">View Docs</Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">📚 Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Complete guides and API docs in /docs
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🧪 Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Unit, integration, and E2E tests ready
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🚀 Deploy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Push to main for automatic deployment
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
