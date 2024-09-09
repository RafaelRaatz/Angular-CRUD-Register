import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  State,
  StateService,
  RegisterEntity,
  RegisterEntityService,
  RequestService,
} from '@services/index';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() isEdit: boolean = false;
  @Input() companyRequest!: any;
  @Input() id!: string;

  form: FormGroup;
  states: State[] = [];
  registerEntities: RegisterEntity[] = [];
  showModal: boolean = false;

  constructor(
    private fb: FormBuilder,
    private stateService: StateService,
    private registerEntityService: RegisterEntityService,
    private requestService: RequestService,
  ) {
    this.form = this.fb.group({
      solicitante: this.fb.group({
        ds_responsavel: ['', Validators.required],
        nu_cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
        date_nascimento: ['', Validators.required],
      }),
      empresa: this.fb.group({
        ds_nome_fantasia: ['', Validators.required],
        co_entidade_registro: ['', Validators.required],
      }),
      endereco: this.fb.group({
        co_cep: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
        ds_logradouro: ['', Validators.required],
        ds_bairro: ['', Validators.required],
        ds_complemento: ['', Validators.required],
        ds_municipio: ['', Validators.required],
        co_uf: ['', Validators.required],
        co_numero: ['', Validators.required],
      }),
    });
  }

  ngOnInit(): void {
    this.fetchStates();
    this.fetchRegisterEntities();
  }

  ngOnChanges(): void {
    if (this.isEdit) {
      this.fillFormWithData();
    }
  }

  async fetchStates(): Promise<void> {
    try {
      this.states = await this.stateService.getStates();
    } catch (error) {
      console.error('Erro ao buscar estados', error);
    }
  }

  async fetchRegisterEntities(): Promise<void> {
    try {
      this.registerEntities =
        await this.registerEntityService.getRegisterEntity();
    } catch (error) {
      console.error('Erro ao buscar estados', error);
    }
  }

  fillFormWithData(): void {
    this.form.patchValue({
      solicitante: {
        ...this.companyRequest.solicitante,
      },
      empresa: {
        ...this.companyRequest.empresa,
      },
      endereco: {
        ...this.companyRequest.empresa.endereco,
      },
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Formulário enviado com sucesso', this.form.value);

      this.showModal = true;

      const formValue = this.form.value;

      const requestObject = {
        empresa: {
          ...formValue.empresa,
          endereco: formValue.endereco,
        },
        solicitante: formValue.solicitante,
      };

      this.isEdit
        ? this.requestService.updateCompanyRequest(requestObject, this.id)
        : this.requestService.createCompanyRequest(requestObject);
    } else {
      this.checkFormErrors();
      console.log('Formulário inválido');
    }
  }

  checkFormErrors(): void {
    Object.keys(this.form.controls).forEach((field) => {
      const control = this.form.get(field);
      if (control?.invalid) {
        console.log(`Erro no campo ${field}:`, control.errors);
      }
    });
  }
}
