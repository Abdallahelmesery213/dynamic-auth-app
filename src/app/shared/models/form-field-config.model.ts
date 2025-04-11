export interface FormFieldConfig {
    type: 'text' | 'email' | 'password' | 'number' | 'date';
    name: string;
    label: string;
    required?: boolean;
}