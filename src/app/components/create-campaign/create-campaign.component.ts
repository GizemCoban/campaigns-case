import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Campaign } from '../../models/campaign.model';
import { CampaignService } from '../../services/campaign.service';
import { ToastService } from '../../services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.scss'],
})
export class CreateCampaignComponent implements OnInit {
  campaignForm!: FormGroup;
  showSuccess = false;
  today: string;
  submitted = false;

  get title() {
    return this.campaignForm.get('title');
  }
  get description() {
    return this.campaignForm.get('description');
  }

  constructor(
    private fb: FormBuilder,
    private campaignService: CampaignService,
    private toastService: ToastService,
    private router: Router
  ) {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    this.today = `${year}-${month}-${day}`;
  }

  ngOnInit() {
    this.creatCampaignForm();
  }

  creatCampaignForm() {
    this.campaignForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      points: [0, [Validators.min(0)]],
      date: [this.today],
    });
  }

  resetForm() {
    this.submitted = false;
    this.campaignForm.reset({
      title: '',
      description: '',
      points: 0,
      date: this.today,
    });
  }

  createCampaingFormSubmit() {
    this.submitted = true;

    if (this.campaignForm.valid) {
      try {
        const formValue = this.campaignForm.value;

        const campaign: Campaign = {
          id: '',
          title: formValue.title,
          description: formValue.description,
          points: formValue.points ? formValue.points : 0,
          date: formValue.date ? new Date(formValue.date) : new Date(),
        };

        this.campaignService.addCampaign(campaign);
        this.toastService.showSuccess(
          'Kampanya başarılı bir şekilde eklenmiştir.'
        );
        this.resetForm();
        this.router.navigate(['/campaigns']);
      } catch (error) {
        this.toastService.showError('Kampanya oluşturulurken bir hata oluştu');
      }
    } else {
      this.toastService.showError('Lütfen zorunlu alanları doldurunuz');
    }
  }

  getFormError(fieldName: string): boolean {
    const field = this.campaignForm.get(fieldName);
    return field
      ? field.invalid && (field.dirty || field.touched || this.submitted)
      : false;
  }
}
