import * as S from "./styles"
import { AiOutlineInstagram } from "react-icons/ai"
import { BiLogoWhatsapp } from "react-icons/bi"
import { BiLogoFacebookCircle } from "react-icons/bi"
export function About() {
    return (
        <>
            <h1>Sobre</h1>
            <S.Section>
                <section>
                    <h2>CONTATO</h2>
                    <S.Form action="">
                        <div>
                            <label htmlFor="name" aria-required>Nome</label>
                            <input type="text" placeholder="João" id="name" name="name" />
                        </div>
                        <div>
                            <label htmlFor="email" aria-required>Email</label>
                            <input type="email" placeholder="joao_2003@gmail.com" id="email" name="email" />
                        </div>
                        <div>
                            <label htmlFor="tel">Telefone</label>
                            <input type="number" placeholder="(88) 6983-7892" id="tel" name="tel" />
                        </div>
                        <div>
                            <label htmlFor="service">Serviço</label>
                            <select name="service" id="service">
                                <option value="site">Criação de Sites</option>
                                <option value="media">Mídias Sociais</option>
                                <option value="photo">Fotografia</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="msg">Mensagem</label>
                            <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
                        </div>
                        <div>
                            <input type="checkbox" name="check" id="check" />
                            <label htmlFor="check">Aceito receber mensagens da INFOHELPER por meio desses canais de comunicação</label>
                        </div>
                        <button type="submit">Enviar</button>
                        <button type="reset">Limpar</button>
                    </S.Form>
                </section>
                <section>
                    <h2>QUEM SOMOS</h2>
                    <div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat amet possimus rem nisi exercitationem, ipsa aliquam impedit dolorum beatae! Ullam tenetur minus cum vero corrupti ipsum perferendis nemo laborum vitae.

                        </p>
                    </div>
                </section>
                <section>
                    <BiLogoWhatsapp />
                    <BiLogoFacebookCircle />
                    <AiOutlineInstagram />
                </section>

            </S.Section>
        </>
    )
}