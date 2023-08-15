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
                            <label htmlFor="name" aria-required> <span>Nome </span></label>
                            <input type="text" placeholder="João" id="name" name="name" />
                        </div>
                        <div>
                            <label htmlFor="email" aria-required> <span>Email</span> </label>
                            <input type="email" placeholder="joao_2003@gmail.com" id="email" name="email" />
                        </div>
                        <div>
                            <label htmlFor="tel"><span>Telefone</span></label>
                            <input type="number" placeholder="(88) 6983-7892" id="tel" name="tel" />
                        </div>
                        <div>
                            <label htmlFor="service"><span>Serviço</span></label>
                            <select name="service" id="service">
                                <option value="site">Criação de Sites</option>
                                <option value="media">Mídias Sociais</option>
                                <option value="photo">Fotografia</option>
                            </select>
                        </div>
                        <div className="mensagem">
                            <label htmlFor="msg"><span>Mensagem</span></label>
                            <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
                        </div>
                        <div className="termos">
                            <input type="checkbox" name="check" id="check" />
                            <label htmlFor="check">Aceito receber mensagens da INFOHELPER por meio desses canais de comunicação</label>
                        </div>
                        <div className="buttons">
                            <button type="submit">Enviar</button>
                            <button type="reset">Limpar</button>
                        </div>
                    </S.Form>
                </section>
                <section className="who_we_are">
                    <h2>QUEM SOMOS</h2>
                    <div>
                        <p>        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit quam nisi, in condimentum lorem bibendum quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum sed suscipit enim, sit amet fringilla lectus. Nulla convallis tempus sagittis. Curabitur fermentum aliquet aliquet. Donec dui sem, scelerisque id lectus eget, vehicula varius elit. Praesent vel dolor enim. Maecenas luctus sapien vitae risus interdum mattis. Nullam at nulla sed nunc ornare ullamcorper.</p>
                        <p>
                            Nam posuere rhoncus malesuada. Nullam vel sapien sit amet odio aliquet mattis. Etiam id elementum leo. Nullam pulvinar consectetur dolor, eu suscipit diam pulvinar in. Pellentesque at tristique mi. Pellentesque vel ipsum at ligula lacinia ornare vitae et mi. Cras ac risus ex. Proin eu interdum nulla. Aliquam elementum a
                            </p>
                        <p>
                        Nam posuere rhoncus malesuada. Nullam vel sapien sit amet odio aliquet mattis. Etiam id elementum leo. Nullam pulvinar consectetur dolor, eu suscipit diam pulvinar in. Pellentesque at tristique mi. Pellentesque vel ipsum at ligula lacinia ornare vitae et mi. Cras ac risus ex. Proin eu interdum nulla. Aliquam elementum az

                        </p>
                    </div>
                </section>
                <section className="social_media">
                    <BiLogoWhatsapp />
                    <BiLogoFacebookCircle />
                    <AiOutlineInstagram />
                </section>

            </S.Section>
        </>
    )
}