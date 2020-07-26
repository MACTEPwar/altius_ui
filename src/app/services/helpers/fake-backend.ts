import {
  HttpEvent, HttpHandler,
  HttpInterceptor, HttpRequest,
  HttpResponse,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, dematerialize, materialize, mergeMap } from 'rxjs/operators';
import {
  ColumnSettings,
  EDataType, TemplateEntity,
  TemplateEntityColumn
} from '../../modules/dataTable/models/templateentity';
import { Nacl } from '../../models/doc.nacl';
import { NaclProduct } from '../../models/doc.nacl.product';
import { MainMenu } from '../../models/mainmenu';

let users = JSON.parse(localStorage.getItem('users')) || [];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    return (
      of(null)
        .pipe(mergeMap(handleRoute))
        .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown
        // (https://github.com/Reactive-Extensions/RxJS/issues/648)
        .pipe(delay(500))
        .pipe(dematerialize())
    );

    function handleRoute() {
      switch (true) {
        case url.endsWith('/users/authenticate') && method === 'POST':
          return authenticate();
        case url.endsWith('/users/register') && method === 'POST':
          return register();
        case url.endsWith('/users') && method === 'GET':
          return getUsers();
        case url.match(/\/users\/\d+$/) && method === 'DELETE':
          return deleteUser();
        case url.match(/\/nacl\/\d+$/) && method === 'GET':
          return getNacl();
        case url.match(/\/naclproducts\/\d+$/) && method === 'GET':
          return getNaclProducts();
        case url.endsWith('/mainmenu') && method === 'GET':
          return getMainMenu();
        case url.endsWith('bank/getFullTemplate') && method === 'GET':
          return getFullTemplateForBanks();
        default:
          return next.handle(request);
      }
    }

    function getFullTemplateForBanks(): Observable<HttpResponse<any>> {
      return ok({
        model: 'Bank',
        fields: [{
          field: 'CodeM',
          key: true,
          title: 'МФО',
          type: 'String',
          required: true,
          minLength: null,
          maxLength: 10,
          pattern: null,
          multiLang: false,
          editable: true
        }, {
          field: 'CodeE',
          key: false,
          title: 'МФО',
          type: 'String',
          required: true,
          minLength: null,
          maxLength: 10,
          pattern: '\\d+',
          multiLang: false,
          editable: true
        }, {
          field: 'Name',
          key: false,
          title: 'Назва',
          type: 'String',
          required: true,
          minLength: null,
          maxLength: null,
          pattern: null,
          multiLang: true,
          editable: true
        }, {
          field: 'Address',
          key: false,
          title: 'Адреса',
          type: 'String',
          required: true,
          minLength: null,
          maxLength: 200,
          pattern: null,
          multiLang: false,
          editable: true
        }, {
          field: 'DateRegistration',
          key: false,
          title: 'Дата реєстрації',
          type: 'DateTime',
          required: true,
          minLength: null,
          maxLength: null,
          pattern: null,
          multiLang: false,
          editable: false
        }, {
          field: 'DateLicense',
          key: false,
          title: 'Дата ліцензії',
          type: 'DateTime',
          required: true,
          minLength: null,
          maxLength: null,
          pattern: null,
          multiLang: false,
          editable: true
        }, {
          field: 'NumberLicense',
          key: false,
          title: 'Номер ліцензії',
          type: 'String',
          required: true,
          minLength: null,
          maxLength: 50,
          pattern: null,
          multiLang: false,
          editable: true
        }, {
          field: 'IsUse',
          key: false,
          title: 'Використовується',
          type: 'Boolean',
          required: true,
          minLength: null,
          maxLength: null,
          pattern: null,
          multiLang: false,
          editable: true
        }, {
          field: 'IsDeleted',
          key: false,
          title: 'Помітка про видалення',
          type: 'Boolean',
          required: true,
          minLength: null,
          maxLength: null,
          pattern: null,
          multiLang: false,
          editable: true
        }, {
          field: 'DateInsert',
          key: false,
          title: 'Дата створення запису',
          type: 'DateTime',
          required: true,
          minLength: null,
          maxLength: null,
          pattern: null,
          multiLang: false,
          editable: true
        }, {
          field: 'DateUpdate',
          key: false,
          title: 'Дата оновлення запису',
          type: 'DateTime',
          required: false,
          minLength: null,
          maxLength: null,
          pattern: null,
          multiLang: false,
          editable: true
        }]
      });
    }

    function getBankTemplate(): Observable<HttpResponse<any>> {
      const templateEntity = new TemplateEntity();

      const onlyRead = new ColumnSettings();
      onlyRead.OnlyRead = true;

      const v1: TemplateEntityColumn = new TemplateEntityColumn(
        'Bank',
        'CodeM',
        'КодМ',
        EDataType.STRING_CONTAINS,
        new ColumnSettings(10)
      );
      const v2: TemplateEntityColumn = new TemplateEntityColumn(
        'Bank',
        'CodeE',
        'КодЕ',
        EDataType.STRING_CONTAINS,
        new ColumnSettings(20)
      );
      const v3: TemplateEntityColumn = new TemplateEntityColumn(
        'Bank',
        'Name',
        'Название',
        EDataType.STRING_CONTAINS,
        new ColumnSettings(250)
      );
      const v4: TemplateEntityColumn = new TemplateEntityColumn(
        'Bank',
        'Address',
        'Адрес',
        EDataType.STRING_CONTAINS,
        new ColumnSettings(250)
      );
      const v5: TemplateEntityColumn = new TemplateEntityColumn(
        'Bank',
        'DateRegistration',
        'Дата регистрации',
        EDataType.DATE_EQUAL,
        new ColumnSettings()
      );
      const v6: TemplateEntityColumn = new TemplateEntityColumn(
        'Bank',
        'DateLicense',
        'Дата лицензии',
        EDataType.DATE_EQUAL,
        new ColumnSettings()
      );
      const v7: TemplateEntityColumn = new TemplateEntityColumn(
        'Bank',
        'NumberLicense',
        'Номер лицензии',
        EDataType.INT_CONTAINS,
        new ColumnSettings(4)
      );
      const v8: TemplateEntityColumn = new TemplateEntityColumn(
        'Bank',
        'IsUse',
        'Используется',
        EDataType.CHECKED,
        new ColumnSettings()
      );
      const v9: TemplateEntityColumn = new TemplateEntityColumn(
        'Bank',
        'IsDeleted',
        'Удалено',
        EDataType.CHECKED,
        new ColumnSettings()
      );
      const v10: TemplateEntityColumn = new TemplateEntityColumn(
        'Bank',
        'DateInsert',
        'Дата создания',
        EDataType.DATE_RANGE,
        onlyRead
      );
      const v11: TemplateEntityColumn = new TemplateEntityColumn(
        'Bank',
        'DateUpdate',
        'Дата обновления',
        EDataType.DATE_RANGE,
        onlyRead
      );

      templateEntity.Columns.push(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11);

      return ok(templateEntity);
    }

    function getNacl(): Observable<HttpResponse<any>> {
      const nacl: Nacl = {
        num: '1',
        numInner: '1',
        contractor: 'contrctor',
        contractorId: 1,
        date: 'date',
        dateCheck: 'dateCheck',
        docSubtype: 1,
        docType: 2,
        id: 1,
        name: 'test',
        products: [],
        state: 'done',
        stateId: 1,
        sumActWNds: 6.66,
        sumWNds: 6.66,
        sumWONds: 6.66,
        paymentType: 1,
      };
      return ok(nacl);
    }

    function getNaclProducts(): Observable<HttpResponse<any>> {
      const products: NaclProduct[] = [
        {
          id: 1,
          name: 'product 1',
          producer: 'producer 1',
          form: 'form 1',
          quantity: 2,
          price: 6.66,
        },
        {
          id: 2,
          name: 'product 2',
          producer: 'producer 2',
          form: 'form 2',
          quantity: 2,
          price: 6.66,
        },
      ];
      return ok(products);
    }

    function getMainMenu(): Observable<HttpResponse<any>> {
      const menu: MainMenu[] = [
        {
          id: 1,
          name: 'Справочники',
          url: '',
          image: '',
          level: 1,
          children: [
            {
              id: 11,
              name: 'Реестры',
              url: '',
              image: './assets/maintheme/images/icons/reest.svg',
              level: 2,
              parentId: 1,
              children: [
                {
                  id: 111,
                  name: 'Банки',
                  url: '/banks',
                  image: '',
                  level: 3,
                  parentId: 11,
                  children: [],
                },
                {
                  id: 112,
                  name: 'Валюты',
                  url: '/currency',
                  image: '',
                  level: 3,
                  parentId: 11,
                  children: [],
                },
                {
                  id: 113,
                  name: 'Единицы измерения',
                  url: '',
                  image: '',
                  level: 3,
                  parentId: 11,
                  children: [],
                },
                {
                  id: 114,
                  name: 'Должности',
                  url: '/posts',
                  image: '',
                  level: 3,
                  parentId: 11,
                  children: [],
                },
                {
                  id: 115,
                  name: 'Формы собственности',
                  url: '',
                  image: '',
                  level: 3,
                  parentId: 11,
                  children: [],
                },
                {
                  id: 116,
                  name: 'Действующие вещеста',
                  url: '',
                  image: '',
                  level: 3,
                  parentId: 11,
                  children: [],
                },
                {
                  id: 117,
                  name: 'Симптомы',
                  url: '',
                  image: '',
                  level: 3,
                  parentId: 11,
                  children: [],
                },
                {
                  id: 118,
                  name: 'Формы выпуска',
                  url: '',
                  image: '',
                  level: 3,
                  parentId: 11,
                  children: [],
                },
                {
                  id: 119,
                  name: 'Налоговые ставки',
                  url: '',
                  image: '',
                  level: 3,
                  parentId: 11,
                  children: [],
                },
              ],
            },
            {
              id: 12,
              name: 'Адреса',
              url: '/location',
              image: './assets/maintheme/images/icons/map.svg',
              level: 2,
              parentId: 1,
              children: [],
            },
            {
              id: 13,
              name: 'Физические лица',
              url: '',
              image: './assets/maintheme/images/icons/fizlico.svg',
              level: 2,
              parentId: 1,
              children: [
                {
                  id: 131,
                  name: 'Физические лица',
                  url: '',
                  image: '',
                  level: 3,
                  parentId: 12,
                  children: [],
                },
                {
                  id: 132,
                  name: 'Сотрудники фирмы',
                  url: '/employee',
                  image: '',
                  level: 3,
                  parentId: 12,
                  children: [],
                },
              ],
            },
            {
              id: 14,
              name: 'Контрагенты',
              url: '',
              image: './assets/maintheme/images/icons/contragent.svg',
              level: 2,
              parentId: 1,
              children: [
                {
                  id: 141,
                  name: 'Фирмы учета',
                  url: '',
                  image: '',
                  level: 3,
                  parentId: 14,
                  children: [],
                },
                {
                  id: 142,
                  name: 'Группы контрагентов',
                  url: '',
                  image: '',
                  level: 3,
                  parentId: 14,
                  children: [],
                },
                {
                  id: 143,
                  name: 'Группы контрагента',
                  url: '',
                  image: '',
                  level: 3,
                  parentId: 14,
                  children: [],
                },
                {
                  id: 144,
                  name: 'Настройки фирмы',
                  url: '',
                  image: '',
                  level: 3,
                  parentId: 14,
                  children: [],
                },
                {
                  id: 145,
                  name: 'Банковские счета фирмы',
                  url: '',
                  image: '',
                  level: 3,
                  parentId: 14,
                  children: [],
                },
              ],
            },
            {
              id: 15,
              name: 'Товары',
              url: '',
              image: './assets/maintheme/images/icons/test.svg',
              level: 2,
              parentId: 1,
              children: [
                {
                  id: 151,
                  name: 'Товар',
                  url: '',
                  image: '',
                  level: 3,
                  parentId: 15,
                  children: [],
                },
                {
                  id: 152,
                  name: 'Перевод к другим единицам',
                  url: '',
                  image: '',
                  level: 3,
                  parentId: 15,
                  children: [],
                },
                {
                  id: 153,
                  name: 'Штрих коды',
                  url: '',
                  image: '',
                  level: 3,
                  parentId: 15,
                  children: [],
                },
                {
                  id: 154,
                  name: 'Действующие вещества',
                  url: '',
                  image: '',
                  level: 3,
                  parentId: 15,
                  children: [],
                },
                {
                  id: 155,
                  name: 'Симптомы',
                  url: '',
                  image: '',
                  level: 3,
                  parentId: 15,
                  children: [],
                },
                {
                  id: 156,
                  name: 'Менеджер товара',
                  url: '',
                  image: '',
                  level: 3,
                  parentId: 15,
                  children: [],
                },
                {
                  id: 157,
                  name: 'Группа товара',
                  url: '',
                  image: '',
                  level: 3,
                  parentId: 15,
                  children: [],
                },
                {
                  id: 158,
                  name: 'Бренд товара',
                  url: '',
                  image: '',
                  level: 3,
                  parentId: 15,
                  children: [],
                },
                {
                  id: 159,
                  name: 'Вид товара',
                  url: '',
                  image: '',
                  level: 3,
                  parentId: 15,
                  children: [],
                },
                {
                  id: 1510,
                  name: 'Категория ЛС по классификации',
                  url: '',
                  image: '',
                  level: 3,
                  parentId: 15,
                  children: [],
                },
                {
                  id: 1511,
                  name: 'Государственное регулирование цен',
                  url: '',
                  image: '',
                  level: 3,
                  parentId: 15,
                  children: [],
                },
                {
                  id: 1512,
                  name: 'Ценовая группа товара',
                  url: '',
                  image: '',
                  level: 3,
                  parentId: 15,
                  children: [],
                },
              ],
            },
            {
              id: 16,
              name: 'Подразделения',
              url: '',
              image: './assets/maintheme/images/icons/units.svg',
              level: 2,
              parentId: 1,
              children: [
                {
                  id: 161,
                  name: 'Подразделения фирмы',
                  url: '/store',
                  image: '',
                  level: 3,
                  parentId: 16,
                  children: [],
                },
                {
                  id: 162,
                  name: 'Оборудование',
                  url: '',
                  image: '',
                  level: 3,
                  parentId: 16,
                  children: [],
                },
                {
                  id: 163,
                  name: 'Модели оборудования',
                  url: '',
                  image: '',
                  level: 3,
                  parentId: 16,
                  children: [],
                },
                {
                  id: 164,
                  name: 'Кассы',
                  url: '',
                  image: '',
                  level: 3,
                  parentId: 16,
                  children: [],
                },
                {
                  id: 165,
                  name: 'Группа разрешений кассы',
                  url: '',
                  image: '',
                  level: 3,
                  parentId: 16,
                  children: [],
                },
                {
                  id: 166,
                  name: 'Разрешения по операциям в группе',
                  url: '',
                  image: '',
                  level: 3,
                  parentId: 16,
                  children: [],
                },
              ],
            },
            {
              id: 17,
              name: 'Склады',
              url: '',
              image: './assets/maintheme/images/icons/warehouse.svg',
              level: 2,
              parentId: 1,
              children: [
                {
                  id: 171,
                  name: 'Склад',
                  url: '',
                  image: '',
                  level: 3,
                  parentId: 17,
                  children: [],
                },
                {
                  id: 172,
                  name: 'Структура склада',
                  url: '',
                  image: '',
                  level: 3,
                  parentId: 17,
                  children: [],
                },
                {
                  id: 173,
                  name: 'Условия хранения',
                  url: '',
                  image: '',
                  level: 3,
                  parentId: 17,
                  children: [],
                },
              ],
            },
            // {
            //   id: 11,
            //   name: 'Банки',
            //   url: '/banks',
            //   image: '',
            //   level: 2,
            //   parentId: 1,
            //   children: [],
            // },
            // {
            //   id: 12,
            //   name: 'Валюты',
            //   url: '/currency',
            //   image: '',
            //   level: 2,
            //   parentId: 1,
            //   children: [],
            // },
            // {
            //   id: 13,
            //   name: 'Препараты',
            //   url: '/location',
            //   image: './assets/maintheme/images/icons/test.svg',
            //   level: 2,
            //   parentId: 1,
            //   children: [],
            // },
            // {
            //   id: 14,
            //   name: 'Контрагенты',
            //   url: '/contractor',
            //   image: './assets/maintheme/images/icons/contragent.svg',
            //   level: 2,
            //   parentId: 1,
            //   children: [],
            // },
            // {
            //   id: 15,
            //   name: 'Сотрудники',
            //   url: '/employee',
            //   image: '',
            //   level: 2,
            //   parentId: 1,
            //   children: [],
            // },
            // {
            //   id: 16,
            //   name: 'Профессии',
            //   url: '/posts',
            //   image: './assets/maintheme/images/icons/doctors.svg',
            //   level: 2,
            //   parentId: 1,
            //   children: [],
            // },
            // {
            //   id: 17,
            //   name: 'Подразделения',
            //   url: '/store',
            //   image: '',
            //   level: 2,
            //   parentId: 1,
            //   children: [],
            // },
          ],
        },
        {
          id: 2,
          name: 'Товары',
          url: 'google.com',
          image: '',
          level: 1,
          children: [
            {
              id: 21,
              name: 'Прием товара',
              url: 'google.com',
              image: './assets/maintheme/images/icons/priem.svg',
              level: 2,
              parentId: 2,
              children: [
                {
                  id: 221,
                  name: 'Приходные накладные',
                  url: '/banks',
                  image: '',
                  level: 3,
                  parentId: 7,
                  children: [],
                },
                {
                  id: 222,
                  name: 'Сортировка',
                  url: '',
                  image: '',
                  level: 3,
                  parentId: 7,
                  children: [],
                },
              ],
            },
            {
              id: 22,
              name: 'Претензии и возвраты',
              url: 'google.com',
              image: './assets/maintheme/images/icons/pretenzii.svg',
              level: 2,
              parentId: 2,
              children: [],
            },
            {
              id: 23,
              name: 'Возвраты от покупателя',
              url: 'google.com',
              image: './assets/maintheme/images/icons/vozvrat.svg',
              level: 2,
              parentId: 2,
              children: [],
            },
            {
              id: 24,
              name: 'Инвентаризация',
              url: 'google.com',
              image: './assets/maintheme/images/icons/inventar.svg',
              level: 2,
              parentId: 2,
              children: [],
            },
            {
              id: 25,
              name: 'Утилизация',
              url: 'google.com',
              image: './assets/maintheme/images/icons/utilization.svg',
              level: 2,
              parentId: 2,
              children: [],
            },
          ],
        },
        {
          id: 3,
          name: 'Пополнение остатков',
          url: 'google.com',
          image: '',
          level: 1,
          children: [
            {
              id: 31,
              name: 'ЦБД остатков',
              url: 'google.com',
              image: './assets/maintheme/images/icons/cbd.svg',
              level: 2,
              parentId: 3,
              children: [],
            },
            {
              id: 32,
              name: 'Под заказ',
              url: 'google.com',
              image: './assets/maintheme/images/icons/podzakaz.svg',
              level: 2,
              parentId: 3,
              children: [],
            },
            {
              id: 33,
              name: 'Заказ у поставщика',
              url: 'google.com',
              image: './assets/maintheme/images/icons/postavka.svg',
              level: 2,
              parentId: 3,
              children: [],
            },
            {
              id: 34,
              name: 'Заказы',
              url: 'google.com',
              image: './assets/maintheme/images/icons/orders.svg',
              level: 2,
              parentId: 3,
              children: [],
            },
          ],
        },
        {
          id: 4,
          name: 'Документы',
          url: 'google.com',
          image: '',
          level: 1,
          children: [
            {
              id: 41,
              name: 'Накладные',
              url: 'google.com',
              image: './assets/maintheme/images/icons/nakladnie.svg',
              level: 2,
              parentId: 4,
              children: [],
            },
            {
              id: 42,
              name: 'Чеки',
              url: 'google.com',
              image: './assets/maintheme/images/icons/chek.svg',
              level: 2,
              parentId: 4,
              children: [],
            },
            {
              id: 43,
              name: 'Реестр накладных',
              url: 'google.com',
              image: './assets/maintheme/images/icons/reestr.svg',
              level: 2,
              parentId: 4,
              children: [],
            },
            {
              id: 44,
              name: 'Реестр товарных документов',
              url: 'google.com',
              image: './assets/maintheme/images/icons/reestrtovara.svg',
              level: 2,
              parentId: 4,
              children: [],
            },
            {
              id: 45,
              name: 'Акт пересортицы',
              url: 'google.com',
              image: './assets/maintheme/images/icons/peresortica.svg',
              level: 2,
              parentId: 4,
              children: [],
            },
            {
              id: 46,
              name: 'Переоценка',
              url: 'google.com',
              image: './assets/maintheme/images/icons/pereocenka.svg',
              level: 2,
              parentId: 4,
              children: [],
            },
            {
              id: 47,
              name: 'Списание',
              url: 'google.com',
              image: './assets/maintheme/images/icons/spisanie.svg',
              level: 2,
              parentId: 4,
              children: [],
            },
          ],
        },
        {
          id: 5,
          name: 'Аналитика',
          url: 'google.com',
          image: '',
          level: 1,
          children: [
            {
              id: 51,
              name: 'Отчеты',
              url: 'google.com',
              image: './assets/maintheme/images/icons/otchet.svg',
              level: 2,
              parentId: 5,
              children: [],
            },
            {
              id: 52,
              name: 'Персонал',
              url: 'google.com',
              image: './assets/maintheme/images/icons/personal.svg',
              level: 2,
              parentId: 5,
              children: [],
            },
          ],
        },
        {
          id: 6,
          name: 'Настройки',
          url: 'google.com',
          image: '',
          level: 1,
          children: [
            {
              id: 61,
              name: 'Установки',
              url: 'google.com',
              image: './assets/maintheme/images/icons/ustanovka.svg',
              level: 2,
              parentId: 6,
              children: [],
            },
            {
              id: 62,
              name: 'Параметры печати',
              url: 'google.com',
              image: './assets/maintheme/images/icons/print.svg',
              level: 2,
              parentId: 6,
              children: [],
            },
            {
              id: 63,
              name: 'Версии',
              url: 'google.com',
              image: './assets/maintheme/images/icons/branch.svg',
              level: 2,
              parentId: 6,
              children: [],
            },
            {
              id: 64,
              name: 'Справка',
              url: 'google.com',
              image: './assets/maintheme/images/icons/faq.svg',
              level: 2,
              parentId: 6,
              children: [],
            },
          ],
        },
      ];
      return ok(menu);
    }

    function authenticate(): Observable<HttpResponse<any>> {
      const { username, password } = body;
      const user = users.find(
        (x) => x.username === username && x.password === password
      );
      // if (!user) { /*console.log('Username or password is incorrect');*/ return error('Username or password is incorrect'); }
      // console.log('ok');
      return ok({
        id: 1, // user.id,
        username: 'testLogin', // user.username,
        firstName: 'testName', // user.firstName,
        lastName: 'testLastname', // user.lastName,
        token: 'fake-jwt-token',
      });
    }

    function register(): Observable<HttpResponse<any>> {
      const user = body;

      if (users.find((x) => x.username === user.username)) {
        return error('Username "' + user.username + '" is already taken');
      }

      user.id = users.length ? Math.max(...users.map((x) => x.id)) + 1 : 1;
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));

      return ok();
    }

    function getUsers(): Observable<HttpResponse<any>> {
      if (!isLoggedIn()) {
        return unauthorized();
      }
      return ok(users);
    }

    function deleteUser(): Observable<HttpResponse<any>> {
      if (!isLoggedIn()) {
        return unauthorized();
      }

      users = users.filter((x) => x.id !== idFromUrl());
      localStorage.setItem('users', JSON.stringify(users));
      return ok();
    }

    function ok(body?: any): Observable<HttpResponse<any>> {
      return of(new HttpResponse({ status: 200, body }));
    }

    function error(message): any {
      return throwError({ error: { message } });
    }

    function unauthorized(): any {
      return throwError({ status: 401, error: { message: 'Unauthorised' } });
    }

    function isLoggedIn(): any {
      return headers.get('Authorization') === 'Bearer fake-jwt-token';
    }

    function idFromUrl(): any {
      const urlParts = url.split('/');
      return parseInt(urlParts[urlParts.length - 1], 10);
    }
  }
}

export const fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true,
};
