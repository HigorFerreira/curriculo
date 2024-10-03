/* eslint-disable @typescript-eslint/ban-ts-comment */
import Image from "next/image";
import styles from "./page.module.css";
import Skill from '@/UI/Skill';

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

import Steps from '@/UI/Steps';



function Pannel({ className, children }: { className?: string, children: [ JSX.Element, JSX.Element ] }){
	return <div className={`${styles.presentation} ${className??''}`}>
		{ children }
	</div>
}

function CardItem({ title, label }: { title: string, label: string }){
	return <div>
		<h5>{ title }</h5>
		<p className="_10mt" style={{ fontSize: '10pt' }}>{ label }</p>
	</div>
}

function Card({ marker, title, children }: { marker: string, title: string, children: JSX.Element }) {
	return <div style={{
		display: 'grid',
		gridTemplateColumns: 'auto 1fr',
		gridTemplateRows: 'auto auto 1fr',
		columnGap: 14,
		rowGap: 5,
	}}>
		<p style={{ color: 'var(--primary)', textTransform: 'uppercase', fontWeight: 900 }}>{ marker }</p>
		<p style={{ textTransform: 'uppercase', fontWeight: 700 }}>{ title }</p>
		<div style={{ gridColumn: 2 }}>
			{ children }
		</div>
	</div>
}



export default function Home() {
	return (
		<div className={styles.page}>
			<div></div>
			<div>
				<Pannel className="_100vh">
					<div className="flex aln-center jus-center">
						<div>
							<div style={{
								borderRadius: '50%',
								overflow: 'hidden',
							}}>
								<Image alt="Profile photo" width={200} height={200} src={'/higor.jpg'} />
							</div>
						</div>
					</div>
					<div className={`_42p ${styles['presentation-info']}`}>
						<div>
							<div className={styles.title}>
								<h1 className="text-primary">Higor</h1>
								<h1>Ferreira Alves Santos</h1>
							</div>
							<p className="_8mt" style={{ fontWeight: 300 }}>Full-Stack Developer Expert</p>
						</div>
						<div className="flex _5gap aln-end">
							<a title="GitHub" target="_blank" href="https://github.com/HigorFerreira"><FaGithub /></a>
							<a title="LinkedIn" target="_blank" href="https://www.linkedin.com/in/hfas-higor/"><FaLinkedin /></a>
							<a title="WhatsApp" target="_blank" href="https://wa.me/5562982506984?text=Ol%C3%A1%20Full-Stack%2C%20vi%20seu%20perfil%20em%20eu.higorferreira.dev.br%20e%20gostaria%20de%20conversar%20mais%20sobre%20suas%20compet%C3%AAncias%20profissionais"><FaWhatsapp /></a>
						</div>
						<div className={styles.cards}>
							<CardItem title="Localização" label="Goiânia - GO" />
							<CardItem title="Telefone" label="(62) 08250-6984" />
							<CardItem title="Web" label="eu.higorferreira.dev.br" />
							<CardItem title="Email" label="hfashigor@hotmail.com" />
						</div>
					</div>
				</Pannel>
				<Pannel>
					<div className="_42p flex jus-end">
						<div className="tr">
							<h3 className="text-primary">Introdução</h3>
							<p>Quem sou eu?</p>
						</div>
					</div>
					<div className={`_42p ${styles.intro}`}>
						<p>
						Olá, sou Higor Ferreira.
						</p>

						<p>
						Sou Desenvolvedor Full-Stack com 4 anos de experiência. Minhas principais tecnologias de interesse no desenvolvimento atualmente são NextJs (a framework ReactJs) com preferência para a utilização do TypeScript como linguagem de programação. Testes com Vitest e Testing library (básico).
						Entusiasta das mais diversas tecnologias em NodeJs, como: ExpressJs, Nivo etc.
						</p>

						<p>
						Tenho preferência por arquiteturas de software em micro-serviços, especialmente as que podem rapidamente subir seus serviços (um banco de dados; um gerenciamento de usuários como KeyCloak; um Nginx ou o própio ambiente da aplicação em node ou python) com o Docker componse.
						</p>

						<p>
						Possuo experência média com a linguagem Python. Especialmente em assuntos como servidores Flask ou FastAPI, além também de manipulação da biblioteca Pandas para análises de dados simples.
						</p>

						<p>
						Atualmente, estudo como entusiasta a linguagem Rust e suas tecnologias, principalmente devido a velocidade e segurança das soluções em Rust.
						</p>
					</div>
				</Pannel>

				<Pannel>
					<div className="_42p flex jus-end">
						<div className="tr">
							<h3 className="text-primary">Expertise</h3>
							{/* <p>Quem sou eu?</p> */}
						</div>
					</div>
					<div className={`_42p ${styles.expertise}`}>
						<Card marker="01" title="HTMl Avançado">
							<p>HTML semântico e estruturação para dispositivos em responsividade.</p>
						</Card>
						<Card marker="02" title="CSS Avançado">
							<p>Estilização com FlexBox e Grid para dispositivos responsivos</p>
						</Card>
						<Card marker="03" title="JavaScript Avançado">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nam omnis doloribus?</p>
						</Card>
						<Card marker="04" title="Integração de Tecnologias">
							<>
								<p>Desenvolvimento de sistemas avançados integrando as diversas tecnologias e protocolos de rede.</p>
								<p>Integração de linguagens de alto e baixo nível.</p>
							</>
						</Card>
						<Card marker="05" title="Arquitetura em Microserviços">
							<p>Desenvolvimento de sistemas arquitetados em microserviços para integração contínua.</p>
						</Card>
						<Card marker="06" title="Sistemas Web">
							<p>Sistemas Web de alta interatividade com React.Js.</p>
						</Card>
					</div>
				</Pannel>

				<Pannel>
					<div className="_42p flex jus-end">
						<div className="tr">
							<h3 className="text-primary">Habilidades</h3>
							<p>Principais skills em tecnologias e linguagens</p>
						</div>
					</div>
					<div className={`_42p ${styles.skills}`}>
						<p>Linguagens</p>
						<Skill title="TypeScript" percent={99} />					
						<Skill title="Python" percent={78} />
						<Skill title="Rust" percent={30} />
						<Skill title="C++" percent={70} />
						
						<p>Tecnologias Node</p>
						<Skill title="React.Js" percent={99} />
						<Skill title="Next.Js" percent={80} />
						<Skill title="Express.Js" percent={92} />
						<Skill title="Testing Library" percent={25} />
						<Skill title="Jest" percent={25} />
						<Skill title="Vitest" percent={25} />


						<p>Tecnologias Python</p>
						<Skill title="Pandas" percent={70} />
						<Skill title="Flask Api" percent={63} />
						<Skill title="Fast Api" percent={60} />

						<p>Bancos de dados</p>
						<Skill title="PostGress" percent={65} />
						<Skill title="MariaDB" percent={60} />

						<p>Outros</p>
						<Skill title="Docker" percent={75} />
						<Skill title="Docker-Compose" percent={89} />
					</div>
				</Pannel>

				<Pannel>
					<div className="_42p flex jus-end">
						<div className="tr">
							<h3 className="text-primary">Formação</h3>
							{/* <p>Principais skills em tecnologias e linguagens</p> */}
						</div>
					</div>
					<div className="_42p">
						<Steps
							progressDot
							direction="vertical"
							items={[
								{
									title: '2016 - 2024 Engenharia de computação',
									description: 'Bacharelado em Engenharia de Computação pela PUC Goiás'
								},
								{
									title: '2014 - 2016 Técnico em Mecatrônica',
									description: 'Técnico em Mecatrônica pela Faculdade de Técnologia SENAI Ítalo Bologna'
								},
							]}
						/>
					</div>
				</Pannel>
			</div>
			<div></div>		
		</div>
	);
}
