import React from 'react'
import Image from 'next/image'

export function Statements() {
  return (
    <section className="bg-yellow-400 pt-12 flex flex-col">
      <div className="px-4">
        <p>Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.</p>

        <span className="mt-4 inline-flex flex-col">
          Marie Poirot,
          <strong>Bigapp</strong>
        </span>
      </div>
      <div className="-mb-12">
        <Image src="/img/picture-1.svg" alt="" width={434} height={455} />
      </div>
    </section>
  )
}
