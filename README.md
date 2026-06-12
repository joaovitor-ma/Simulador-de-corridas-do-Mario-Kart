# 🏎️ Simulador de corridas do Mario Kart
<div style="display: flex; gap: 10px; flex-direction: row;">
    <img src="https://i.pinimg.com/originals/b0/a9/a8/b0a9a87f01e295d350e16b824160dc80.gif" width="100px">
    <p>
        Este é um pequeno jogo de terminal que simula uma batalha de corrida 1v1 entre dois personagens do jogo Mario Kart disponíveis na lista abaixo!
    </p>
</div>

### Personagens jogáveis
<table>
<tr>
    <td style="border: 1px solid; width: 110px; text-align: center">
        Mario<br>
        <img src="https://giffiles.alphacoders.com/738/7381.gif" alt="mario" width="100">
    </td>
    <td style="border: 1px solid; width: 150px">
        Velocidade: 4<br>
        Manobrabilidade: 3<br>
        Poder: 3
    </td>
    <td style="border: 1px solid; width: 110px; text-align: center">
        Peach<br>
        <img src="https://64.media.tumblr.com/573a778fc6768545c0d6afb8e5e3ec82/tumblr_mqpgn9XpoB1rrftcdo7_250.gif" alt="peach" width="100">
    </td>
    <td style="border: 1px solid; width: 150px">
        Velocidade: 3<br>
        Manobrabilidade: 4<br>
        Poder: 2
    </td>
    <td style="border: 1px solid; width: 110px; text-align: center">
        Yoshi<br>
        <img src="https://images.gamebanana.com/img/ico/sprays/yoshi_render.gif" alt="img" width="100">
    </td>
    <td style="border: 1px solid; width: 150px">
        Velocidade: 2<br>
        Manobrabilidade: 4<br>
        Poder: 3
    </td>
</tr>
<tr>
    <td style="border: 1px solid; width: 110px; text-align: center">
        Bowser<br>
        <img src="https://images.gamebanana.com/img/ico/sprays/bowser_cart___render.gif " alt="img">
    </td>
    <td style="border: 1px solid; width: 150px">
        Velocidade: 5<br>
        Manobrabilidade: 2<br>
        Poder: 5
    </td>
    <td style="border: 1px solid; width: 110px; text-align: center">
        Luigi<br>
        <img src="https://64.media.tumblr.com/90e3a4d34ab47ffaa8147e6c312ca8f4/tumblr_mxk56xFcDU1rby4vso1_500.gif" alt="img" width="100">
    </td>
    <td style="border: 1px solid; width: 150px">
        Velocidade: 3<br>
        Manobrabilidade: 4<br>
        Poder: 4
    </td>
    <td style="border: 1px solid; width: 110px; text-align: center">
        Donkey Kong<br>
        <img src="https://giffiles.alphacoders.com/299/2998.gif" alt="img" width="100">
    </td>
    <td style="border: 1px solid; width: 150px">
        Velocidade: 2<br>
        Manobrabilidade: 2<br>
        Poder: 5
    </td>
</tr>
</table>

### 🤖Mecânicas do jogo
#### 🥷Jogadores
Deverão ser selecionados dois personagens para disputar uma corrida entre si
#### 🏁Pistas
<ul>
    <li>Os personagens disputarão 5 rodadas com pistas aleatórias para cada rodada</li>
    <li>A cada rodada será sorteado um bloco de pista que pode ser: reta, curva ou confronto
        <ul>
            <li>Caso a pista seja uma RETA o jogador deverá jogar um dado de 6 lados e somar o resultado com o seu atributo de VELOCIDADE, quem vencer <b>ganha</b> 1 ponto.</li>
            <li>Caso a pista seja uma CURVA o jogador deverá jogar um dado de 6 lados e somar o resultado com o seu atributo de MANOBRABILIDADE, quem vencer <b>ganha</b> 1 ponto.</li>
            <li>Caso a pista seja um CONFRONTO o jogador deverá jogar um dado de 6 lados e somar o resultado com o seu atributo de PODER, quem perder <b>perde</b> 1 ponto.</li>
        </ul>
    </li>
</ul>

#### 🥇Condição de vitória
Vence aquele que, ao final das 5 rodadas, tiver mais pontos acumulados