import axios from "axios";
import { Prompt } from "next/font/google";
import React, { useState } from "react";

const MainApp = () => {
  return (
    <>
      <main>
        <section id="resultArea">
          <p id="result">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            culpa in illum necessitatibus provident itaque illo repellendus
            omnis sequi vitae fugit officiis quos veniam asperiores est, numquam
            alias a nesciunt. A molestiae minima tempore quae est magni qui
            animi fuga ut mollitia quod sit natus fugiat cum, exercitationem
            illo aperiam distinctio accusantium quis nulla reiciendis officia
            impedit. Provident, magnam nihil? Molestiae dicta at illum provident
            velit laborum laboriosam, ut eum, blanditiis dolorem tempora,
            voluptate temporibus distinctio. Neque ea soluta ad et rem, magnam
            repudiandae consectetur tempora deleniti. Omnis, atque accusamus!
            Suscipit sunt iure mollitia, corporis tempora magni quia fugit,
            placeat obcaecati excepturi incidunt! Reprehenderit aperiam,
            deserunt aspernatur sit minus non officia sapiente earum, ipsum sunt
            id nam deleniti, suscipit aut. Atque, fugiat. Odio praesentium
            distinctio placeat dignissimos aut adipisci ipsum itaque quos
            voluptatum consequuntur excepturi rerum dolorem quam, veniam
            provident voluptates, libero tempore quod enim laboriosam! Ullam
            officia vitae possimus. Eligendi odio rerum consequatur quia nobis
            quos. Tenetur cumque atque porro eos, repellat veniam vel aliquam
            animi inventore voluptas, et odit magnam eligendi excepturi nesciunt
            error maxime harum. Ullam, sequi! Dolorem corrupti optio eius odio,
            iste animi corporis, iure nam cumque id quasi! Exercitationem nam
            quidem aliquid ea quaerat doloribus animi sed similique non
            voluptatum, dolores tempora, nemo perspiciatis! Eligendi! Sequi illo
            atque eius enim cupiditate inventore numquam doloremque similique
            cumque, ipsa sapiente hic necessitatibus molestiae consectetur.
            Omnis consequatur facilis neque blanditiis facere, est quod!
            Mollitia quaerat modi commodi temporibus. Mollitia magnam esse
            adipisci dolor illo quibusdam temporibus officiis ut sit vitae? Rem
            explicabo ad illum deleniti. Deserunt vitae maiores perspiciatis
            quis, ab molestias. Quae necessitatibus esse temporibus dicta
            nesciunt? Provident expedita id neque ratione quasi rerum dolore ab
            commodi! Id itaque ullam eos placeat, quia voluptatibus incidunt
            rerum unde, reprehenderit quibusdam ab. Minus voluptatum, nihil vel
            quis tempore a!
          </p>
        </section>
        <section id="inputField">
          <input
            type="text"
            id="promptInput"
            placeholder="Enter a prompt"
            autoComplete="off"
          />
          <button id="btn">
            <i class="fa-solid fa-arrow-up-from-bracket"></i>
          </button>
        </section>
      </main>
    </>
  );
};

export default MainApp;
