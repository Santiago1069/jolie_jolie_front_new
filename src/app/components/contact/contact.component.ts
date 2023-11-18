import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MensajeService } from 'src/app/services/mensaje.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  mensaje: any = {
    asunto: '',
    mensaje: ''
  }

  constructor(private formBuilder: FormBuilder, private router: Router, private mensajeService: MensajeService) {
    this.contactForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.contactFormGroupFuction();
  }

  enviarMensaje() {
    this.mensajeService.createMensajes(this.mensaje.asunto, this.mensaje.mensaje).subscribe({
      next: (res) => {
        Swal.fire(
          'Guardado',
          'El mensaje ha sido enviado correctamente, pronto se comunicaran mediante el correo electronico que tiene registrado!',
          'success'
        )
        this.contactForm.reset();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


  contactFormGroupFuction() {
    this.contactForm = this.formBuilder.group({
      asuto: ['', [Validators.required]],
      mensaje: ['', [Validators.required]]
    });
  }

}
