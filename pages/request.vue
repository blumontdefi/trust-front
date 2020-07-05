<template>
  <div class="signup">
    <div class="signup__content container container--sign">
      <div class="signup__title">
        <h2>Solicita un crédito</h2>
        <p>
          Para acceder a un crédito debes pasar por un proceso de evaluación que inicia con en el envío de esta
          solicitud.
        </p>
      </div>
      <form>
        <div class="form-group mb-2">
          <label for="credit">Crédito a solicitar en dólares * (Es solo referencial y será sujeto a evaluación)</label>
          <input v-model.number="requestCredit.credit" class="input" type="text" id="credit">
        </div>
        <div class="form-group mb-2">
          <label for="observation">Observación</label>
          <textarea v-model="requestCredit.observation" rows="5" class="textarea" id="observation"></textarea>
        </div>
        <div>
          <span v-for="(e, index) in errors" :key="index" class="form-group__error">
          {{ e }}
        </span>
        </div>
        <!--Button-->
        <button
          type="button"
          :disabled="this.$v.$invalid || this.progress"
          class="btn btn--primary"
          @click="toggleTerms">
          <span v-if="!progress">Solicitar crédito</span>
          <div v-else class="lds-ellipsis">
            <div/>
            <div/>
            <div/>
            <div/>
          </div>
        </button>
        <!--End-->
        <!--Terms-->
        <div id="popTerms" class="terms">
          <div class="block">
            <div class="mt-2 mb-2 text-right" @click="toggleTerms">
              <ion-icon name="close-circle-outline"/>
            </div>
            <div>
              <h2 class="text-center mb-4">
                Términos y condiciones
              </h2>
              <div class="terms-section">
                <p>
                  Los términos y condiciones de uso que se describen a continuación (en adelante, los “Términos y
                  Condiciones”) constituyen las reglas de carácter vinculante que regirán entre toda persona que,
                  mediante la aceptación de los Términos y Condiciones, que se manifestará por la marcación de la
                  casilla de verificación de “Sí, acepto los Términos y Condiciones”, ubicada al final del presente
                  documento, inicie una relación contractual vía Contrato de Adhesión de Uso de Sitio Web de Subastas
                  Electrónicas (en adelante, el “Contrato”) con CAKC E.I.R.L. (en adelante, “TRUST”). A las personas que
                  inicien dicha relación contractual con TRUST, en adelante se les denominará simplemente como
                  “Participantes” o, en singular, “Participante”.
                </p>
                <p>
                  Los presentes Términos y Condiciones describen los requisitos para iniciar la relación contractual con
                  TRUST antes descrita, así como los derechos y responsabilidades de los Participantes, como usuarios
                  registrados del sitio web de TRUST, que opera en la siguiente dirección URL: www.trustoa.com (en
                  adelante, la “Sitio”). Asimismo, los presentes Términos y Condiciones regulan la intervención de los
                  Participantes como postores en las subastas electrónicas que realice TRUST a través del Sitio, así
                  como el goce de cualquier producto o servicio relacionado o complementario que ofrezca o pueda ofrecer
                  TRUST (conjuntamente, el “Servicio”).
                </p>
                <p>
                  La aceptación de los Términos y Condiciones constituye un requisito previo para el registro del
                  Participante como usuario del Servicio y/o la utilización del mismo. Mediante la aceptación de los
                  Términos y Condiciones, el Participante declara haber leído, entendido y aceptado todas las
                  condiciones establecidas en este documento y demás políticas y principios incorporados por referencia,
                  accesibles a través del Sitio, incluidas en estos Términos y Condiciones.
                </p>
                <p>
                  Cualquier persona que no acepte estos Términos y Condiciones, los cuales tienen un carácter
                  obligatorio y vinculante, deberá abstenerse de utilizar los Servicios.
                </p> <br><br>
                <h4 class="text-left">
                  I.- Registro de Participante
                </h4> <br>
                <p>
                  <strong>a) Registro.-</strong> Todo Participante que desee utilizar el Servicio, deberá registrarse en
                  el Sitio y
                  aceptar los Términos y Condiciones de Uso del mismo, mediante la marcación de la casilla de
                  verificación ubicada al pie de los presentes Términos y Condiciones. Para registrarse es obligatorio
                  completar el formulario de registro en todos sus campos con datos válidos e información personal
                  exacta y verdadera (en adelante, los "Datos Personales”).
                </p>
                <p>
                  Luego de verificar la información proporcionada en el formulario y la reputación crediticia del
                  Participante (o potencial Participante), TRUST proporcionará un código de acceso para la creación de
                  una Cuenta, conforme se describe en el literal siguiente, al correo electrónico registrado en el
                  formulario. Mientras TRUST no proporcione el código de acceso para la creación de la Cuenta, la
                  persona no podrá participar de ningún evento de Subasta que se realice a través del Sitio.
                  Excepcionalmente y a su exclusiva discreción, TRUST podrá prestar ciertos Servicios a personas no
                  registradas en el Sitio.
                </p>
                <p>
                  El Participante se encuentra obligado a actualizar los Datos Personales conforme resulte necesario.
                  TRUST NO se responsabiliza por la certeza ni validez de los Datos Personales provistos por los
                  Participantes ni por la falta de actualización de los mismos. Los Participantes garantizan y
                  responden, en cualquier caso, por la veracidad, exactitud, integridad, vigencia y autenticidad de
                  los Datos Personales ingresados. Toda la información y los Datos Personales ingresados por el
                  Participante tienen carácter de declaración jurada.
                </p>
                <p>
                  TRUST se reserva el derecho de solicitar comprobantes, documentación y/o información adicional a
                  efecto de corroborar la información proporcionada por un Participante en materia de Datos Personales,
                  así como de suspender temporal o definitivamente a aquellos Participantes cuyos Datos Personales y/o
                  reputación crediticia no hayan podido ser confirmados o que por cualquier razón sean dudosos para
                  TRUST.
                </p>
                <p>
                  TRUST se reserva el derecho de rechazar una solicitud de registro o de cancelar o suspender, temporal
                  o definitivamente un registro ya existente, en caso de sospechar mala fe y/o inexactitud y/o de
                  detectar incongruencias, inconsistencias o datos falsos en la información recibida, en las
                  declaraciones emitidas por los Participantes o en caso de detectar actividades sospechosas, sin que
                  tal decisión genere para el Participante (o potencial Participante) derechos de indemnización o
                  resarcimiento.
                </p>
                <p>
                  <strong>b) Cuenta TRUST.-</strong> Al registrarse en el Sitio, el Participante deberá abrir una cuenta
                  (en adelante, la
                  "Cuenta"). La Cuenta permitirá al Participante ser postor en las subastas electrónicas que organice
                  TRUST a través del Sitio, las mismas que, a discreción de TRUST, podrán ser promocionadas y
                  publicitadas por medios de comunicación, publicidad y difusión, distintos al Sitio.
                </p>
                <p>
                  El Participante abrirá la Cuenta mediante el ingreso de su dirección de correo electrónico y el código
                  de acceso proporcionado por TRUST conforme a lo indicado en el literal anterior (en adelante, la
                  “Clave de Acceso”). Si transcurrieran cinco días desde su registro en el Sitio y el Participante no
                  hubiera recibido la Clave de Acceso a su correo electrónico, se entenderá que su solicitud de creación
                  de la Cuenta fue desestimada por TRUST.
                </p>
                <p>
                  El Participante se obliga a mantener la confidencialidad de su Clave de Acceso. En virtud de ello, el
                  Participante será el único y exclusivo responsable por todas las operaciones efectuadas en su Cuenta.
                  El Participante se compromete a notificar a TRUST, en forma inmediata y por medio idóneo y fehaciente,
                  de cualquier uso no autorizado de su Cuenta, así como del ingreso o de intentos de ingreso por
                  terceros no autorizados a la misma.
                </p>
                <p>
                  Se precisa que la Cuenta es personal, única e intransferible, y será asignada a un solo Participante y
                  está prohibida su venta, cesión o transferencia bajo cualquier título. El Participante no podrá
                  permitir ni autorizar el uso de su Cuenta por terceras personas.
                </p>
                <p>
                  Todo Participante que se disponga a participar en una subasta, por el solo mérito de haber aceptado
                  los Términos y Condiciones, declara contar con la solvencia económica para hacer el pago inmediato del
                  valor de adjudicación de(l)(los) bien(es) sobre los que oferte en el Sitio. Queda establecido que
                  cualquier referencia a dinero en el Sitio se entenderá hecha en Dólares Americanos, salvo en los casos
                  que se indique expresamente otra moneda.
                </p>
                <br><br>
                <h4 class="text-left">
                  II.- Procedimiento de Subastas
                </h4> <br>
                <p>
                  <strong>a) Condiciones Generales.- </strong>TRUST subastará, a través del Sitio, bienes de propiedad
                  de terceros que
                  han contratado previamente los servicios de TRUST para dicho fin, a quienes en adelante se
                  les denominará en plural como “Mandantes” y, en singular, “Mandante”. Las subastas electrónicas se
                  realizarán con la frecuencia y en las oportunidades que determine TRUST y serán publicitadas y
                  promocionadas a través de los medios de comunicación que decida TRUST (en adelante, “Subasta”).
                </p>
                <p>
                  Cada Subasta tendrá en un día determinado, una hora de inicio y una hora de cierre. La intervención de
                  los Participantes será a través del Sitio. Cada Subasta será conducida por un subastador y se
                  transmitirá por video en vivo a través del Sitio, bajo presencia de un Notario Público y/o de un
                  funcionario de una Notaría Pública que dé fe del acto y de las adjudicaciones que se realicen.
                </p>
                <p>TRUST iniciará la Subasta en la hora de inicio que disponga y presentará cada uno de los bienes
                  ofertados, individualmente o en lotes, por un intervalo de __ minutos. Los Participantes sólo podrán
                  formular posturas por un bien o por un lote, según sea el caso, durante el intervalo de tiempo que
                  corresponda al mismo. En adelante, se denominará al bien o al lote de bienes materia de subasta,
                  simplemente como “Lote” y, en plural, “Lotes”.
                </p>
                <p>
                  TRUST podrá retirar cualquier Lote de la Subasta sin necesidad de expresar ninguna causa o
                  justificación para hacerlo. Esta facultad incluso rige para Lotes que hubieran sido exhibidos en la
                  etapa de pre-ofertas, a la que se refiere el literal siguiente.
                </p>
                <p>
                  <strong>b) Etapa de Pre-Ofertas.-</strong> Durante los siete días previos a la fecha prevista para el
                  inicio de la
                  Subasta, se abrirá una etapa de pre-ofertas, durante la cual los Participantes con una Cuenta activa
                  podrán formular ofertas preliminares, no definitivas, sobre los Lotes, a través del Sitio.
                </p>
                <p>
                  La etapa de pre-ofertas se cerrará a las 10:00 horas del día de la Subasta. El precio base de un Lote
                  en la Subasta, estará constituido por el importe de la pre-oferta más alta realizada para ese Lote al
                  cierre de la etapa de pre-ofertas.
                </p>
                <p>
                  En caso que un Lote recibiera pre-ofertas pero no recibiera ninguna postura durante la Subasta, el
                  mismo será adjudicado automáticamente, al terminar el intervalo de presentación de dicho Lote en la
                  Subasta, al Participante que hubiera realizado la pre-oferta más alta, salvo que el Lote contara con
                  un precio de reserva y dicha pre-oferta más alta no lo hubiese igualado o superado.
                </p>
                <p>
                  Toda adjudicación que se realice al Participante que hubiere participado en la etapa de pre- ofertas y
                  hubiere realizado la máxima pre-oferta, estará sujeta a un descuento automático del precio de
                  adjudicación, del 2.5%.
                </p>
                <p>
                  <strong>c) Precio de Reserva.-</strong> Los Participantes reconocen que los Mandantes podrán
                  establecer un precio de
                  reserva por sus Lotes a subastar. En ese caso, TRUST podrá no adjudicar un Lote al Participante que
                  realice la máxima puja, si esta no alcanzare el precio de reserva establecido.
                </p>
                <p>
                  Durante la Subasta, al momento de iniciar la presentación de un Lote que estuviera sujeto a un precio
                  de reserva, se señalará la existencia de dicha condición, sin revelar a cuánto asciende el mismo
                </p>
                <p>
                  <strong>d) Formulación de Posturas por los Participantes.-</strong> Al iniciar la Subasta, cada Lote
                  se presentará al
                  precio base resultante de la etapa de pre-ofertas o, en su defecto, al precio base que
                  determine el Mandante. Las posturas se realizarán únicamente durante el intervalo de tiempo que
                  corresponda a dicho Lote, según el rol de turnos que disponga TRUST.
                </p>
                <p>
                  La primera postura, para ser válida, deberá superar el precio base al menos en US $ 100.00 (Cien
                  Dólares Americanos). Cada postura posterior, para ser válida, deberá superar a la anterior, en por lo
                  menos US $ 100.00 (Cien Dólares Americanos) adicionales.
                </p>
                <p>
                  Al iniciar el turno de un determinado Lote en la Subasta, el Sitio tendrá un display disponible para
                  aquellos Participantes que hubieran ingresado a su Cuenta, actualizado en tiempo real, de cuál es la
                  mejor postura válida vigente para ese Lote y del tiempo restante al turno del mismo.
                </p>
                <p>
                  Para formular una postura, el Participante debe ingresar el monto de su oferta en el casillero
                  destinado para ello en el Sitio. Ninguna postura es válida mientras no haya sido reconocida y
                  publicitada en el display de la mejor postura válida del Sitio. Estas reglas también se aplicarán para
                  la etapa de pre-ofertas, en todo lo que sea pertinente.
                </p>
                <p>
                  <strong>e) Adjudicación del Lote.-</strong> La propiedad del Lote será adjudicada al Participante que
                  realice la
                  postura más alta al término del turno o intervalo de tiempo asignado para la Subasta del Lote o, en su
                  defecto, al Participante que haya realizado la máxima pre-oferta, si dicho Lote no hubiese recibido
                  posturas válidas durante la Subasta.
                </p>
                <p>
                  Sin embargo, el Lote no se adjudicará si estuviese sujeto a un precio de reserva y la postura más alta
                  durante la Subasta o, en su defecto, la pre-oferta más alta durante la etapa de pre-ofertas, no
                  hubiesen alcanzado o superado dicho precio de reserva.
                </p>
                <p>
                  El Participante, por el mérito de la aceptación de los Términos y Condiciones, manifiesta su voluntad
                  de adquirir la propiedad de(l)(los) Lote(es) que le sea(n) adjudicado(s), y se obliga a pagar el
                  precio de adjudicación de(l)(los) mismo(s).
                </p>
                <p>
                  <strong>f) Alcances de la Compraventa.-</strong> El contrato de compraventa entre el Participante y el
                  Mandante,
                  quedará perfeccionado de manera automática, al momento en que el subastador adjudique el Lote al
                  Participante que realice la mejor postura o la mejor pre-oferta, según sea el caso.
                </p>
                <p>
                  El Participante adjudicatario del Lote y el Mandante, deberán acordar directamente la forma de pago
                  del precio de adjudicación, sin perjuicio de lo cual, de no mediar acuerdo expreso que diga lo
                  contrario, la regla general es que el pago se realice al contado dentro de los diez días posteriores
                  al cierre de la Subasta.
                </p>
                <p>
                  En caso que el Mandante se lo solicitase, el Participante está obligado a suscribir, tan pronto como
                  se le adjudique el Lote, una declaración o documento, reconociendo haber realizado la compra del Lote,
                  sin embargo, el mismo no será requerido para la validez del acto de la compraventa del Lote, la que se
                  entenderá perfeccionada y válida desde la adjudicación durante la subasta.
                </p>
                <p>
                  En caso que el Mandante decidiera otorgar un financiamiento al Participante para el pago del precio de
                  adjudicación, el plazo y los detalles relativos al mismo, serán pactados directamente entre ambos. De
                  igual modo, el Mandante y el Participante acordarán directamente los detalles
                  para la entrega de la posesión de(l)(los) Lote(es) que fuera(n) adjudicado(s), en defecto de lo cual
                  se aplicarán las reglas del Código Civil peruano.
                </p>
                <p>
                  Salvo que el Mandante y el Participante acordaran algo distinto, la entrega de(l)(los) Lote(es) que
                  sea(n) adjudicado(s), se realizará en el lugar donde se encontrase(n) al momento de la Subasta, siendo
                  los gastos de entrega y de traslado de cargo del Participante.
                </p>
                <p>
                  En el supuesto que el Mandante hiciera entrega del Lote antes de la cancelación del precio de
                  adjudicación, el Participante estará prohibido de vender y/o entregar bajo cualquier forma o título,
                  la posesión del Lote a terceros, así como estará impedido de trasladar el Lote fuera de la ciudad en
                  donde se hubiera realizado la entrega del Lote.
                </p>
                <p>
                  Corresponderá al Mandante emitir el comprobante de pago que corresponda a favor del Participante
                  adjudicatario del Lote, si fuera el caso.
                </p>
                <p>
                  Si el Participante adjudicatario del Lote no cumpliera con cancelar el precio en el plazo de cinco
                  días del cierre de la Subasta o conforme a los términos que hubiese pactado con el Mandante, éste
                  tendrá derecho a resolver el contrato de conformidad con el Art. 1430 del Código Civil, es decir, sin
                  procedimiento ni declaración judicial previa y podrá, por lo mismo, disponer libremente del Lote. En
                  este caso, si el Mandante ya hubiera entregado la posesión del Lote al Participante, este deberá
                  devolverlo en el mismo estado en el que lo recibió.
                </p>
                <p>
                  En caso de resolución de contrato por incumplimiento en el pago del precio de adjudicación, el
                  Participante quedará obligado al pago de las penalidades que hubiera pactado con el Mandante.
                </p>
                <p>
                  <strong>g) Subasta de Caballos de Carrera.-</strong> En el caso de la Subasta de caballos de carrera,
                  el estado
                  sanitario y conformación orgánica de los mismos se presumen conocidos por el Participante, no
                  admitiéndose reclamo alguno tendiente a dejar sin efecto la operación u obtener un descuento en el
                  precio de venta o modificación en la forma de pago, por defectos del animal.
                </p>
                <p>
                  Para efecto de lo señalado en el párrafo anterior, TRUST solicitará a los Mandantes que proporcionen
                  la siguiente documentación, que se pondrá a disposición de los Participantes a través del Sitio,
                  durante la etapa de pre-ofertas y durante la Subasta:
                </p>
                <p>
                  • Fotografías a color y en alta definición del animal.
                  • Certificado genealógico de identidad y de propiedad otorgado por el Stud Book Peruano.
                  • Catálogo y pedigrí.
                  • Certificado veterinario y radiografías, con una antigüedad no mayor de 30 días previos a la Subasta.
                </p>
                <p>
                  Si un animal fuera subastado sin contar con alguno de los elementos descritos precedentemente, se
                  presume que el Participante que formule pre-oferta(s) y/o postura(s) sobre dicho animal, conocía sus
                  características físicas y fisiológicas por otros medios, ajenos a TRUST y/o al Sitio, no habiendo
                  lugar a reclamo por cualquier condición sanitaria o fisiológica que pudiera estar presente al momento
                  de adjudicarse el Lote.
                  En el caso de la Subasta de caballos de carrera, el mínimo de la Pre – Oferta es de US $ 3,000 (Tres
                  Mil y 00/100 Dólares Americanos) por cada caballo y se incrementará en lances mínimos de US $ 200
                  (Doscientos y 00/100 Dólares Americanos).
                </p>
                <p>
                  La inscripción de la transferencia de los caballos que sean adjudicados se regulará conforme a lo
                  reglamentado por el Stud Book Peruano.
                </p>
                <p>
                  <strong>h) Medio de Pago.-</strong> TRUST, a su sola discreción, podrá ofrecer a los Participantes
                  adjudicatarios de
                  los Lotes, un medio de pago con tarjeta de crédito, a través de la plataforma de pagos de Mercado
                  Libre Perú S.R.L., denominada “Mercado Pago”.
                  En caso que TRUST ofreciera la opción de pagar a través de Mercado Pago, pondrá en conocimiento del
                  Participante los términos y condiciones de uso de dicho servicio para su aceptación, en cuyo caso se
                  aplicarán las comisiones, tarifas, recargos y demás disposiciones ahí establecidas.
                  El Participante también se obliga a suscribir los formularios que sean exigibles de acuerdo con la
                  legislación vigente, para la prevención del lavado de activos y del financiamiento del terrorismo.
                </p>
                <p>
                  <strong>i) Anuncios durante la Subasta.-</strong> Cualquier anuncio que se realice antes del inicio o
                  durante la
                  Subasta, ya sea emitido verbalmente por el subastador y transmitido en vivo a través del Sitio, o sea
                  publicado por escrito en el Sitio antes o durante la Subasta, prevalecerá sobre las condiciones de
                  venta establecidas en el presente instrumento y/o sobre cualquier publicación que hubiera precedido al
                  anuncio.
                </p>
                <p>
                  <strong>j) Reclamos.-</strong> El Participante reconoce que TRUST actúa por cuenta del Mandante, ya
                  que sólo ejerce la
                  intermediación de la venta de los Lotes, por lo que no es responsable por ningún defecto, vicio
                  oculto, desperfecto, falla, dolencia o en general por ninguna condición negativa que afecte el(los)
                  Lote(es) que sea(n) adjudicado(s) al Participante durante la Subasta.
                </p>
                <p>
                  De igual modo, TRUST tampoco es responsable por cualquier situación de incumplimiento, inejecución o
                  ejecución parcial, tardía o defectuosa de las obligaciones que competen al Mandante, en su condición
                  de vendedor.
                </p>
                <p>
                  En consecuencia, el Participante dirigirá cualquier reclamo que tuviera sobre el(los) Lote(es)
                  adjudicado(s), únicamente contra el Mandante, obligándose a no incluir ni a solicitar la incorporación
                  de TRUST en el trámite de dicho reclamo, cualquiera que sea la vía que adopte el Participante para
                  interponerlo.
                </p>
                <p>
                  <strong>k) Prohibición de Compra Directa.-</strong> Por el mérito de la aceptación de los Términos y
                  Condiciones, el
                  Participante se obliga a no adquirir, fuera de la Subasta, alguno de los Lotes que se publiciten a
                  través del Sitio.
                </p>
                <p>
                  El Participante declara conocer que, en caso de incumplimiento de la presente prohibición, el Mandante
                  está obligado a pagar a TRUST una penalidad ascendente al 10% del valor de adjudicación más alto de la
                  Subasta, por cada Lote que venda directamente, es decir, fuera de Subasta.
                </p>
                <br><br>
                <h4 class="text-left">
                  III.- Misceláneas
                </h4> <br>
                <p>
                  <strong>a) Capacidad.-</strong> Sólo podrán registrarse en el Sitio y abrir una Cuenta aquellas
                  personas que tengan
                  capacidad de ejercicio (de conformidad con los dispuesto en la normativa vigente) para contratar. No
                  podrán registrarse ni utilizar los Servicios menores de edad, personas que no tengan capacidad para
                  contratar o aquellos Participantes que hayan sido suspendidos o inhabilitados del Sitio, temporal o
                  definitivamente.
                </p>
                <p>
                  <strong>b) Utilización del Servicio por cuenta propia.-</strong> Solamente se permite utilizar los
                  Servicios en nombre
                  propio y no en representación y/o por cuenta de terceros.
                </p>
                <p>
                  <strong>c) Prevención en Lavado de Activos.-</strong> El Participante declara que los recursos con los
                  que participará
                  en la Subasta, los medios que empleó para adquirirlos, y los demás valores derivados del presente
                  contrato, tienen un origen lícito y por ende no provienen de actividades ilícitas o contrarias a las
                  buenas costumbres.
                </p>
                <p>
                  El Participante exime a TRUST de toda responsabilidad civil, penal, o administrativa si la declaración
                  contenida en esta cláusula fuere falsa.
                </p>
                <p>
                  El Participante autoriza al TRUST a realizar el análisis pertinente e informar documentalmente a las
                  autoridades competentes, en caso de que fuere necesario.
                </p>
                <p>
                  <strong>d) Seguridad y Confidencialidad de datos personales.-</strong> Cada Participante reconoce y
                  acepta que TRUST
                  pueda recolectar, compartir y transmitir los Datos Personales para
                </p>
                <p>
                  - Cumplir los fines relativos a la prestación del Servicio, facilitar el proceso de Subasta, así como
                  la transferencia de los Lotes que sean adjudicados. - Verificar la identidad y/o reputación crediticia
                  del Participante. <br>
                  - Verificar cualquier infracción, sanción o reparo que pudiera existir sobre el
                  Participante por cualquier entidad relacionada o reguladora del Lote o los Lotes que vayan a ser
                  ofertados en las Subastas que se vayan a realizar a partir del momento del Registro del Participante.
                  <br>
                  - Publicar los detalles y resultados de la Subasta, incluida la relación de adjudicatarios de los
                  Lotes. <br>
                  - Transmitir los Datos Personales a(l)(los) Mandante(s) titulares de(l)(los) Lote(s) que el
                  Participante se adjudique. <br>
                  - Transmitirlos a Mercado Libre Perú S.R.L., para el uso de la plataforma de Mercado
                  Pago. - Facilitar el proceso de inscripción del Participante como nuevo titular del Lote, ante
                  cualquier registro público o privado que corresponda. <br>
                  - Atender algún requerimiento de información cursado por
                  cualquier autoridad competente. - Los demás fines que sean relativos al presente Contrato.
                </p>
                <p>
                  TRUST no venderá, alquilará ni negociará con otras empresas los Datos Personales que hayan ingresado
                  los Participantes. Todos los Datos Personales se transmiten a través de una página de Internet segura
                  que protegerá y encriptará la información de los Datos Personales. La información personal se almacena
                  en servidores o medios magnéticos que mantienen altos estándares de seguridad.
                  TRUST hará sus mejores esfuerzos para mantener la confidencialidad y seguridad de los Datos
                  Personales, pero no responderá por perjuicios que se puedan derivar de la violación de las medidas que
                  adopte por parte de terceros que utilicen las redes públicas o Internet para acceder a dicha
                  información.
                </p>
                <p>
                  <strong>e) Limitación de Responsabilidad por el Servicio.-</strong> TRUST no garantiza el acceso y uso
                  continuado o
                  ininterrumpido del Sitio ni del Servicio. El sistema puede eventualmente no estar disponible debido a
                  dificultades técnicas o fallas de Internet o por cualquier otra circunstancia ajena a TRUST.
                </p>
                <p>
                  Los Participantes NO podrán imputarle responsabilidad alguna a TRUST, ni exigir resarcimiento alguno,
                  en virtud de perjuicios resultantes de las mencionadas dificultades, así como por cualquier otra clase
                  de daños, incluyendo daño emergente o lucro cesante, daños indirectos, especiales o consecuentes que
                  surjan o experimenten los Participantes.
                </p>
                <p>
                  <strong>f) Licencia Limitada.-</strong> Todos los derechos intelectuales e industriales sobre el
                  Sitio, su diseño,
                  códigos, desarrollos, software, hardware, dominio, logos, emblemas, logotipos, diseños, estructura,
                  contenidos, información, etc. son de propiedad de TRUST. En ningún caso se entenderá que el
                  Participante tendrá algún tipo de derecho sobre los mismos.
                </p>
                <p>
                  <strong>g) Modificaciones de los Términos y Condiciones.-</strong> TRUST podrá modificar en cualquier
                  momento los
                  presentes Términos y Condiciones. TRUST notificará los cambios al Participante publicando una versión
                  actualizada de dichos Términos y Condiciones en el Sitio con expresión de la fecha de la última
                  modificación. Todos los términos modificados entrarán en vigor a los 10 (diez) días de su publicación.
                </p>
                <p>
                  Dentro de los 5 (cinco) días siguientes a la publicación de las modificaciones introducidas, el
                  Participante deberá comunicar por e-mail si no acepta las mismas; en ese caso quedará disuelto el
                  vínculo contractual. Vencido este plazo, se considerará que el Participante acepta los nuevos términos
                  y el contrato continuará vinculando a ambas partes.
                </p>
                <p>
                  <strong>h) Cesión.-</strong> El Participante no podrá ceder, transferir, delegar o disponer de los
                  derechos u
                  obligaciones derivados del presente Contrato, total o parcialmente. TRUST podrá ceder, transferir,
                  delegar o disponer de los derechos u obligaciones derivados del presente Contrato o de su posición
                  contractual, total o parcialmente, para lo cual el Participante otorga su consentimiento por el mérito
                  de la aceptación de los Términos y Condiciones para la realización de dichas acciones.
                </p>
                <p>
                  <strong>i) Terminación del Contrato.-</strong> Trust y el Participante podrán, en cualquier
                  oportunidad durante la
                  vigencia del presente Contrato, terminarlo sin expresión de causa alguna, lo que implicará el cierre
                  de la Cuenta, pero ello no eximirá el cumplimiento de todas las obligaciones que correspondan al
                  Participante en caso que, previamente a la terminación del Contrato, hubiese formulado alguna
                  pre-oferta, postura y/o hubiese sido adjudicado con algún Lote en cualquier Subasta, y el trámite de
                  la compraventa entre el Participante y el Mandante, aún no hubiese concluido.
                </p>
                <p>
                  Asimismo, TRUST podrá, en caso de incumplimiento del Participante de cualquiera de las condiciones de
                  los presentes Términos y Condiciones, o a la legislación aplicable en la materia,
                  dar por terminada la prestación del Servicio sin ningún tipo de aviso previo, reservándose el derecho
                  de reclamar los daños y perjuicios que tal incumplimiento le haya causado.
                </p>
                <p>
                  TRUST se reserva el derecho de excluir, a su sola discreción, a cualquier Participante de sus
                  Subastas.
                </p>
                <p>
                  <strong>j) Nulidad de las Disposiciones del Contrato.-</strong> En caso que cualquiera de las
                  disposiciones de los
                  Términos y Condiciones fuera declarado Nulo o Anulable por cualquier autoridad competente, dicha
                  declaración no afectará las demás disposiciones que no hubieran seguido la misma suerte, por lo que
                  estas continuarán siendo eficaces y exigibles en todo su contenido.
                </p>
                <p>
                  <strong>k) Registro de Operaciones.-</strong> El Participante autoriza en forma irrevocable a TRUST
                  y/o a quien TRUST
                  designe, a grabar las operaciones del Participante relativas a los Servicios prestados a través del
                  Sitio, y a utilizar dichas grabaciones como medio probatorio ante autoridades administrativas y/o
                  judiciales.
                </p>
                <p>
                  <strong>l) Publicidad.-</strong> Por el mérito de la aceptación de los Términos y Condiciones, los
                  Participantes
                  autorizan a TRUST a remitirles publicidad e información de las Subastas que organice, por correo
                  electrónico, mensaje de texto, redes sociales, Whastapp y otros medios de comunicación que decida
                  TRUST.
                </p>
                <p>
                  <strong>m) Notificaciones.-</strong> Serán válidas todas las notificaciones realizadas a los
                  Participantes por TRUST en
                  la dirección de correo electrónico principal registrada por éstos en sus Datos Personales.
                </p>
                <p>
                  <strong>n) Domicilios.-</strong> Se fija como domicilio de TRUST, Av. El Derby 250 , Piso 1903 ,
                  Edificio Capital ,
                  Distrito de Santiago de Surco , Lima, Perú. El domicilio constituido por los Participantes a los fines
                  del Contrato, es el domicilio registrado por los Participantes ante TRUST en sus Datos Personales.
                </p>
                <p>
                  <strong>ñ) Anexos.-</strong> Forman parte integral e inseparable de los presentes Términos y
                  Condiciones incorporados
                  en este Contrato, los siguientes documentos, los cuales se podrán consultar mediante el enlace abajo
                  provisto o accediendo directamente a las páginas correspondientes:
                </p>
                <p>
                  Tarifas del servicio de Mercado Pago <br>
                  Términos y Condiciones de Mercado Pago <br>
                  Política de Privacidad de Mercado Pago <br>
                </p>
                <p>
                  <strong>o) Reclamos.-</strong> En caso que el Participante quisiera presentar cualquier reclamo por el
                  uso de los
                  Servicios, podrá hacerlo a través del Libro de Reclamaciones accediendo al siguiente link:
                </p>
                <p>
                  <strong>p) Solución de Controversias.-</strong> Todas las controversias derivadas o relacionadas con
                  este Contrato
                  serán resueltas de forma definitiva mediante arbitraje de derecho, de acuerdo con el Reglamento de
                  Arbitraje del Centro Nacional e Internacional de Arbitraje de la Cámara de Comercio de Lima, a cuyas
                  normas, administración y decisión se someten las partes en forma incondicional, declarando conocerlas
                  y aceptarlas en su integridad.
                  q) Jurisdicción y ley aplicable.- El Contrato estará regido en todos sus puntos por las leyes vigentes
                  en la República del Perú, especialmente por el Código Civil.
                </p>
              </div>
            </div>
            <div class="terms__accept">
              <span class="signup__terms">
                <input id="terms" v-model="terms" type="checkbox">
                He leído y acepto los <nuxt-link to="/terms" class="primary-color" target="_blank"> Términos y condiciones</nuxt-link>
              </span>
            </div>
            <button type="button" :disabled="!terms" class="btn btn--primary" @click="submit">
              Enviar
            </button>
          </div>
        </div>
        <!--End-->
      </form>
    </div>
  </div>
</template>

<script>
import { required, numeric } from 'vuelidate/lib/validators'

export default {
  name: 'Request',
  layout: 'blue',
  data () {
    return {
      requestCredit: {},
      errors: [],
      progress: false,
      terms: false
    }
  },
  validations: {
    requestCredit: {
      credit: {
        required,
        numeric
      }
    }
  },
  methods: {
    async submit () {
      try {
        this.$v.requestCredit.$touch()
        if (!this.$v.$invalid) {
          this.toggleTerms()
          this.progress = true
          const user = this.$store.state.user.data
          // Get client
          let clientRef = null
          const querySnapClient = await this.$fireStore.collection('clients').where('uid', '==', user.uid).get()
          querySnapClient.forEach((c) => {
            clientRef = {
              id: c.id,
              ...c.data()
            }
          })
          if (clientRef) {
            await this.$fireStore.collection('requestCredits').add({
              client: {
                id: clientRef.id,
                name: clientRef.name
              },
              credit: this.requestCredit.credit,
              approve: false,
              observation: this.requestCredit.observation ? this.requestCredit.observation : ''
            })
            await this.$router.push({ name: 'thanksRequest' })
            this.progress = false
          }
        }
      } catch (e) {
        this.progress = false
        const error = 'Hubo un error, por favor ponte en contacto con nosotros.'
        this.errors.push(error)
      }
    },
    toggleTerms () {
      document.body.classList.toggle('body--disabledScroll')
      const popTerms = document.getElementById('popTerms')
      popTerms.classList.toggle('show')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "assets/scss/pages/signup";
  @import "../assets/scss/components/terms";
</style>
