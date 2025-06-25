import { Injectable } from '@angular/core';
import { supabase } from '../supabase/supabaseClient';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signUp(email: string, password: string) {
    const signUp = supabase.auth.signUp({ email, password });
    return signUp;
  }

  signIn(email:string,password:string){
    const signIn =  supabase.auth.signInWithPassword({email,password});
    return signIn;
  }
}
