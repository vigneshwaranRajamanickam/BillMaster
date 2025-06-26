import { Injectable } from '@angular/core';
import { supabase } from '../supabase/supabaseClient';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signUp(form:any) {
    const signUp = supabase.auth.signUp(form);
    return signUp;
  }

  signIn(form:any){
    const signIn =  supabase.auth.signInWithPassword(form);
    return signIn;
  }
}
