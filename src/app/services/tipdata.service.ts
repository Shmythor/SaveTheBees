import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipdataService {

  constructor() { }

  data = {
    title: '',
    img: '',
    content: [],
    quote: ''
  }


  getDataOfTip(num: number): any {
    switch (num) {
      case 1:
        this.data =  {
          title: 'Planta flores en tu jardín',
          img: '../../../assets/images/img-tip01.jpg',
          content: [
            'Las plantas nativas están mejor aclimatadas y crecen con mucha facilidad, por lo que las abejas ya están acostumbradas a polinizarlas sin problemas',
            'Pero si no quieres plantar flores únicamente por estética, las abejas también disfrutan del polen de las plantas medicinales, ya que la mayoría de ellas florecen. Puedes plantar romero, Albahaca, Lavanda, Tomillo y muchas otras, ¡y luego reutilizarlas en la cocina!'
          ],
          quote: 'No compres, ¡planta!'
        };
        break;

      case 2:
        this.data = {
          title: 'Ponles un cuenco con agua',
          img: '../../../assets/images/img-tip02.jpg',
          content: [
            'Ya tengas tus plantas en el jardín o en el balcón, siempre que puedas es muy recomendable dejar un cuenco con agua y varios corchos, maderas, canicas o cualquier objeto que flote, para que las abejas puedan apoyarse a beber sin riesgo a caer.',
            'Para los meses cálidos donde abundan mosquitos, es importante que el agua esté limpia, así que cámbiala cada 3 o 4 días. Y, sobre todo, ¡que sea agua clara! Cualquier tipo de azúcar u otra substancia que añadas al agua podría ser perjudicial para las abejas. Es mejor que el azúcar la obtengan del néctar.'
          ],
          quote: 'Calor pasamos todos, una ayuda nunca viene mal.'
        }
        break;

      case 3:

        this.data =  {
          title: 'Prioriza la miel ecológica',
          img: '../../../assets/images/img-tip03.jpg',
          content: [
            'Además de apoyar al comercio local, que nunca está de más, ayudas a los apicultores locales.',
            'Ellos están más predispuestos que las grandes compañías a tratar a las abejas de un modo más ecológico y humano, así que te puedes asegurar de que velarán por la salud de sus abejas en todo momento.'
          ],
          quote: 'El paladar te lo agradecerá'
        };
        break;

      case 4:

        this.data =  {
          title: 'Come comida orgánica',
          img: '../../../assets/images/img-tip04.jpg',
          content: [
            'No es solo cuestión de salud. Por norma general, los agricultores locales evitan el uso de pesticidas que son muy dañinos para las abejas (¡incluidas las abejas reina!)',
            'De esta forma, estarás cuidando tanto de tí como de las abejas.'
          ],
          quote: 'Una práctica que se extiende cada vez más entre todo el mundo. ¡Súmate!'
        };
        break;

      case 5:

        this.data =  {
          title: 'No arranques flores silvestres',
          img: '../../../assets/images/img-tip05.jpg',
          content: [
            'Si tienes la suerte de contar con una casa con jardín, o simplemente vas de paseo por el campo, no arranques demasiadas flores que puedan aparecer, como dientes de león o tréboles.',
            'Estas son flores muy comunes en todo el mundo y abundan sobre todo en verano, por lo que es muy importante que las abejas puedan parar para polinizarlas cuando el calor empieza a aumentar.'
          ],
          quote: 'Lo agradece tanto la tierra como la vista'
        };
        break;

      case 6:

        this.data =  {
          title: '¡Infórmate y comparte!',
          img: '../../../assets/images/img-tip06.jpg',
          content: [
            'Hay muchas cosas que puedes hacer por tu cuenta para apoyar a las abejas, además de lo mencionado anteriormente,como empezar a cuidar abejas por tu cuenta, construirles casas en tu jardín, etc…',
            'Aunque obviamente no vale para todo el mundo, algo que sí puedes hacer es compartir esta información. ¡Tal vez, alguien que lo vea si esté dispuesto a investigar más y convertirse en apicultor por hobby! '
          ],
          quote: 'Este pequeño gesto puede hacer mucho'
        };
        break;

      default:
        break;
    }

    return this.data;
  }

  //We call this method when we open a new tip
  updateTipProgress() {
    let tipIndex = this.getTipProgress();
    if (tipIndex < 6) { tipIndex++; }
    localStorage.setItem('tipindex', tipIndex.toString());
  }

  getTipProgress(): number {
    let tipIndex = localStorage.getItem('tipindex');

    if (tipIndex === null ) { tipIndex = '1'; }
    return parseInt(tipIndex);

  }
}
