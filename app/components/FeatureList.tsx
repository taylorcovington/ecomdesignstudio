/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Store Theme Customization',
    description: `Need a developer to update your theme? We got you covered. Looking for a complete custom store. Let's chat!`,
  },
  {
    name: 'Page Speed Optimization',
    description: `Store speeds can drive away traffic which leads to lost sales. We'll evaluate your site for free to see how to make it faster`,
  },
  {
    name: 'Store Migration',
    description: 'Store migrations can be very complex. Let our Migration Experts take care of it for you.',
  },
  {
    name: 'Conversion Rate Optimization',
    description: 'We focus on on-page and off-page data-driven optimizations specifially to boost revenue. ',
  },
  
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">How we can help your fitness ecom store</h2>
          <p className="mt-4 text-lg text-gray-500">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
          </p>
        </div>
        <dl className="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                <p className="ml-9 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
