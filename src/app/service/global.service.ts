import { Service } from '@angular/core';

@Service()
export class GlobalService{
  
    convertUrlString(text: string): string{
        if (!text) return '';
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-') 
        .replace(/^-+|-+$/g, ''); 
    }
}
