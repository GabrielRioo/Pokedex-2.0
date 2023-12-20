'use client'

import Link from 'next/link'
// import { useMediaQuery } from 'react-responsive';
import Frontside from './frontside/page'
import Backside from './backside/page'
import { useState, useEffect } from 'react';

export default function Home() {
  const [screenWidth, setScreenWidth] = useState(0);
  const [side, setSide] = useState("");

  useEffect(() => {
    // Atualiza a largura da tela quando o componente é montado
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    // Atualiza a largura da tela quando a janela é redimensionada
    window.addEventListener('resize', updateScreenWidth);

    // Chama a função inicialmente para definir a largura da tela
    updateScreenWidth();

    // Remove o listener do evento de redimensionamento ao desmontar o componente
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []); // O segundo parâmetro vazio garante que o useEffect é executado apenas uma vez, no montante do componente

  // Define um limite para considerar como "mobile"
  const mobileWidth = 767;

  // Verifica se é mobile com base na largura da tela
  const isMobile = screenWidth <= mobileWidth;

  return (
    <div>
      {isMobile ? (
        // Se for mobile, mostra apenas Frontside
        <>
          {side === "" ? (
            <div>
              <Frontside />
              <button onClick={() => setSide("backside")} className="bg-red-600 text-white rounded-full pt-2 pb-2 pr-4 pl-4 absolute mr-3 mb-3 right-0 bottom-0">Turn Around</button>
            </div>
          ) : (
            <div>
              <Backside />
              <button onClick={() => setSide("")} className="bg-red-600 text-white rounded-full pt-2 pb-2 pr-4 pl-4 absolute ml-3 mb-3 left-0 bottom-0">Turn Around</button>
            </div>
          )}
        </>
      ) : (
        // Se for desktop, mostra ambos lado a lado
        <div className='md:flex md:flex-row md:justify-center'>
          <Frontside />
          <Backside />
        </div>
      )}

    </div>
  )
}
