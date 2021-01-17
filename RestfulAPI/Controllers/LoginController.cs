using DigitalApp.Models;
using RestfulAPI.DAL;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography;
using System.Text;
using System.Web.Http;


namespace RestfulAPI.Controllers
{
    public class LoginController : ApiController
    {
        DigitalAppEntities dc = null;
        ErrorInfo errorInfo = null;

        public LoginController()
        {
           dc = new DigitalAppEntities();
            errorInfo = new ErrorInfo();
        }

        //Validate User from Database
        [HttpGet]
        public Object ValidateUser(string userName , string password)
        {
            //Password Decrypt
            string Pass_word = passwordDecrypt(password);
            //validate user credentiols from database
            var validateUser = dc.tbl_Users.Where(x => x.UserName == userName && x.Password == Pass_word).FirstOrDefault();

            if (validateUser != null)
            {
                errorInfo.success = "true";
                errorInfo.errorMessage = "";
            }
            else
            {
                errorInfo.success = "false";
                errorInfo.errorMessage = "Login error";
              
            }
            return new { errorInfo = errorInfo };

        }

        // use this method for Password Encrypt
        public static string passwordEncrypt(string cryptTxt)
        {
            string key = "encryptionkey";
            cryptTxt = cryptTxt.Replace(" ", "+");
            byte[] bytesBuff = Convert.FromBase64String(cryptTxt);
            using (Aes aes = Aes.Create())
            {
                Rfc2898DeriveBytes crypto = new Rfc2898DeriveBytes(key, new byte[] { 0x49, 0x76, 0x61, 0x6e, 0x20, 0x4d, 0x65, 0x64, 0x76, 0x65, 0x64, 0x65, 0x76 });
                aes.Key = crypto.GetBytes(32);
                aes.IV = crypto.GetBytes(16);
                using (MemoryStream mStream = new MemoryStream())
                {
                    using (CryptoStream cStream = new CryptoStream(mStream, aes.CreateDecryptor(), CryptoStreamMode.Write))
                    {
                        cStream.Write(bytesBuff, 0, bytesBuff.Length);
                        cStream.Close();
                    }
                    cryptTxt = Encoding.Unicode.GetString(mStream.ToArray());
                }
            }
            return cryptTxt;
        }

        // use this method for Password Decrypt
        public static string passwordDecrypt(string inText)
        {
            string key = "encryptionkey";
            byte[] bytesBuff = Encoding.Unicode.GetBytes(inText);
            using (Aes aes = Aes.Create())
            {
                Rfc2898DeriveBytes crypto = new Rfc2898DeriveBytes(key, new byte[] { 0x49, 0x76, 0x61, 0x6e, 0x20, 0x4d, 0x65, 0x64, 0x76, 0x65, 0x64, 0x65, 0x76 });
                aes.Key = crypto.GetBytes(32);
                aes.IV = crypto.GetBytes(16);
                using (MemoryStream mStream = new MemoryStream())
                {
                    using (CryptoStream cStream = new CryptoStream(mStream, aes.CreateEncryptor(), CryptoStreamMode.Write))
                    {
                        cStream.Write(bytesBuff, 0, bytesBuff.Length);
                        cStream.Close();
                    }
                    inText = Convert.ToBase64String(mStream.ToArray());
                }
            }
            return inText;
        }
    }
}
